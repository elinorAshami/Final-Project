const Promise = require("bluebird");
const cloudinary = require('cloudinary').v2;
const Datauri = require ('datauri');
const path = require('path');

cloudinary.config({
    cloud_name: 'voiera',
    api_key: '228417225742266',
    api_secret: 'jRR8oUUVnV8G-xemkPTujWvra6A'
});

function uploadBase64Cloudinary(req,res,next) {
    if (req.body.file) {
        cloudinary.uploader.upload(req.body.file.value).then((data) => {
            req.body.icon = data.secure_url;
            next();
        })
    } else {
        next();
    }
}

function uploadChannels(req, res, next) {
    console.log(req.body.channels);
    req.body.channels = JSON.parse(req.body.channels);
    const Uploads = Promise.map(req.files,(file)=>{
        const dUri = new Datauri();
        const dataUri = req => dUri.format(path.extname(file.originalname).toString(), file.buffer);
        const formattedFile = dataUri(req).content;
        return cloudinary.uploader.upload(formattedFile, {resource_type:'video'}, function(error, result) {return Object.assign(result,{originalname: file.originalname})});
    });
    Promise.all(Uploads).then((uploadRes) => {
        req.body.channels.forEach((channel,ci) => {
            channel.audioFiles.forEach((audioFile,ai) => {
                if (audioFile.size) {
                    // NEW AUDIO FILE
                    uploadRes.forEach((singleUploadRes) => {
                        if ((singleUploadRes.originalname === audioFile.name) && (singleUploadRes.bytes === audioFile.size)) {
                            req.body.channels[ci].audioFiles[ai].audioUrl = singleUploadRes.secure_url;
                        }
                    })
                }
            })
        });
        next();
    });
}

function uploadExport(req,res,next) {
    const dUri = new Datauri();
    const file = req.file;
    const dataUri = req => dUri.format(path.extname(file.originalname).toString(), file.buffer);
    const formattedFile = dataUri(req).content;
    cloudinary.uploader.upload(formattedFile, {resource_type:'video'}, function(error, result) {
        if (error) {
            throw new Error(error);
        }
        req.body.lastExportedUrl = result.secure_url;
        next();
    });
}

module.exports = {
    uploadChannels,
    uploadExport,
    uploadBase64Cloudinary
};