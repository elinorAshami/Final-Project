import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStop,faStepBackward,faStepForward,faMicrophone,faMusic,faVolumeMute, faHeadphones,faPause,faPlus,faWindowClose,faSave } from '@fortawesome/free-solid-svg-icons'
import Slider from '@material-ui/lab/Slider';
import BufferLoader from '../scripts/BufferLoader'
import Draggable from 'react-draggable';
import DATA from '../exampleData.js';
import Waveform from 'waveform-react';
import {InstrumentImgs} from '../assets/instrumentsImgs';
import EditableLabel from 'react-inline-editing';
import axios from 'axios';

class Studio extends Component {
    constructor(props){
        super(props);
        const that = this;
        let urlparams = (new URL(document.location)).searchParams;
        let id = urlparams.get("id");
        this.state = {
            volume: 100,
            spacing: 8,
            runningTime: 0,
            playing: true,
            playbackTime: 0,
            channelData: DATA,
            loading:true,
            songId: id,
            title: 'New Song',
            bpm: 120
        };
        axios.post('http://localhost:1234/studio/getDataForStudio',{id})
            .then((res)=>{
            res = res.data;
            that.setState({channelData: res.channels, title: res.title, bpm: res.bpm});
            console.log(this.state)
            const mappedArr = [];
            res.channels.forEach((channel)=>{
                channel.audioFiles.forEach((audioClip)=>{
                    mappedArr.push(audioClip.audioUrl);
                })
            });
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            const context = new AudioContext();
            context.suspend();
            this.state.context = context;
            const bufferLoader = new BufferLoader(
                context,
                mappedArr,
                finishedLoading
            );
            bufferLoader.load();

            function finishedLoading(bufferList) {
                let i = 0;
                const data = that.state.channelData;
                data.forEach((channel,chIndex)=>{
                    channel.audioFiles.forEach((audioClip,acIndex)=>{
                        data[chIndex].audioFiles[acIndex].buffer = bufferList[i];
                        i++;
                    })
                });
                that.setState({context,loading:false,channelData:data});
            }
        });

    }

    msToTime(s) {

        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;

        return pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    }


    changeVolume = (event, volume) => {
        this.setState({ volume });
    };

    playAll = () => {
        const channelData = this.state.channelData;
        this.state.context.resume();
        this.state.channelData.forEach((channel,ci)=>{
            channel.audioFiles.forEach((audio,ai) => {
                let bufferSource = this.state.context.createBufferSource();
                bufferSource.buffer = audio.buffer;
                bufferSource.connect(this.state.context.destination);
                bufferSource.start(this.state.context.currentTime + audio.location/this.state.spacing);
                channelData[ci].audioFiles[ai].bufferSource = bufferSource;
            })
        });
        this.setState(state => {
            if (state.status) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime });
                });
            }
            return { status: !state.status };
        });
    };
    pauseAll = () => {
        clearInterval(this.timer);
        this.state.context.suspend();
        this.setState({status: false, suspended: true });
    };
    stopAll = () => {
        clearInterval(this.timer); // new
        this.state.channelData.forEach((channel)=>{
            channel.audioFiles.forEach((audio) => {
                audio.bufferSource.stop(this.state.context.currentTime);
            })
        });
        this.state.context.suspend();
        this.setState({runningTime: 0, status: false, suspended: true });
    };

    handleDrag = (e,data) => {
        const channelData = this.state.channelData;
        const loc = data.node.id.split('-');
        channelData[loc[1]].audioFiles[loc[2]].location = data.x;
        this.setState(channelData);
    };

    addChannel = () => {
        console.log("add channel")
        let channelData = this.state.channelData;
        channelData.push({
            'instrument': 'audio',
            'title': 'New Channel',
            'effects': [],
            'audioFiles': [],
            'new': true
        });
        this.setState({channelData})
    };

    deleteAudio = (ci,ai) => {
        let channelData = this.state.channelData;
        if (channelData[ci].audioFiles[ai].bufferSource) {
            channelData[ci].audioFiles[ai].bufferSource.disconnect();
        }
        channelData[ci].audioFiles.splice(ai,1);
        this.setState({channelData});
    };

    onUpload = (e) => {
        this.setState({loading:true});
        const reader1 = new FileReader();
        const ci = e.target.id.split('-')[2];
        let channelData = this.state.channelData;
        const that = this;
        const file = e.target.files[0];
        reader1.onload = function(ev) {
            that.state.context.decodeAudioData(ev.target.result).then(function(buffer) {
                // Initial FormData
                const formData = new FormData();
                formData.append("file", file);
                // formData.append("tags", `codeinfuse, medium, gist`);
                formData.append("upload_preset", "biwlw0dl"); // Replace the preset name with your own
                formData.append("api_key", "228417225742266"); // Replace API key with your own Cloudinary key
                formData.append("timestamp", (Date.now() / 1000) | 0);

                // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
                axios.post("https://api.cloudinary.com/v1_1/voiera/video/upload", formData, {
                    headers: { "X-Requested-With": "XMLHttpRequest" },
                }).then(response => {
                    const data = response.data;
                    channelData[ci].audioFiles.push({
                        location:0,
                        audioUrl: data.secure_url,
                        buffer : buffer,
                    });
                    that.setState({channelData,loading: false});
                });
            });
        };
        reader1.readAsArrayBuffer(file);

    };

    saveSong = () => {
        axios.post('http://localhost:1234/studio/saveDataInStudio',{
            channels: this.state.channelData,
            songId: this.state.songId,
            title: this.state.title,
            bpm: this.state.bpm
        })
        // let files = [];
        // this.state.channelData.forEach((channel)=>{
        //     channel.audioFiles.forEach((audio) => {
        //         if (audio.audioUrl === 'local') {
        //             console.log(audio.file);
        //             files.push(audio.file);
        //         }
        //     })
        // });

        // Push all the axios request promise into a single array
        // const uploaders = files.map(file => {
        //
        // });

        // Once all the files are uploaded
        // axios.all(uploaders).then(() => {
            //     // ... perform after upload is successful operation
            //     var data = new FormData();
            //     data.append('files', JSON.stringify(files));
            //     data.append('channelData', this.state.channelData);
            //     data.append('songId', this.state.songId);
            //     data.append('title', this.state.title);
            //     axios.post('http://localhost:1234/studio/saveDataInStudio',data,{
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     })
            //         .then((res) => {
            //
            //         })
            // });
    };

    editTitle = (data) => {
        //TODO handle empty string
        this.setState({title:data})
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div className="loading">Loading...</div> : ''}
                <div className="header">
                    <div className="songDetails">
                        <EditableLabel text={this.state.title}
                                       labelClassName='songTitle'
                                       inputClassName='songTitle'
                                       inputWidth='300px'
                                       onFocusOut={this.editTitle.bind(this)}
                        />
                    </div>
                    <div className="controls">
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faStepBackward}/>
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faStepForward}/>
                        </Button>
                        <Button className={"controlButton"} onClick={this.stopAll}>
                            <FontAwesomeIcon icon={faStop}/>
                        </Button>
                        <Button className={"controlButton"} onClick={this.pauseAll}>
                            <FontAwesomeIcon icon={faPause}/>
                        </Button>
                        <Button className={"controlButton"} onClick={this.playAll}>
                            <FontAwesomeIcon icon={faPlay}/>
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faMicrophone}/>
                        </Button>
                        <Button className={"controlButton"}>
                            {this.msToTime(this.state.runningTime)}
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faMusic}/>
                        </Button>
                        <Button className={"controlButton"}>
                            {this.state.bpm} BPM
                        </Button>
                        <Button className={"controlButton"}>
                            Cmaj
                        </Button>
                        <Button className={"controlButton"}>
                            4/4
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faSave} onClick={this.saveSong.bind(this)}/>
                        </Button>
                    </div>
                </div>
                    <div className="channels">
                        {this.state.channelData.map((channel,key) =>
                            <div key={channel._id} className="channel">
                                <img src={InstrumentImgs[channel.instrument] || InstrumentImgs.audio}/>
                                <div className="channel-details">
                                    <p>{channel.title}
                                        <input className="fileUpload" type='file' id={'upload-ch-'+key} onChange={this.onUpload} />
                                    </p>
                                    <FontAwesomeIcon icon={faVolumeMute}/>
                                    <FontAwesomeIcon icon={faHeadphones}/>
                                    <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                            value={this.state.volume}
                                            aria-labelledby="label"
                                            onChange={this.changeVolume}/>
                                    <span>FX</span>
                                </div>
                            </div>
                        )}
                        <div>
                            <Button className={"controlButton"} onClick={this.addChannel.bind(this)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </Button>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="playLine" style={{'left': (this.state.runningTime/1000) * (this.state.spacing)}}/>
                        <div className="timeline">
                            <div className="timebar"></div>
                            {this.state.channelData.map((channel,ci) =>
                                <div key={channel._id} className="timebar-channel" id={"channel-"+ci}>
                                    {channel.audioFiles.map((audioclip,ai) =>
                                        <Draggable key={audioclip._id} bounds={"#channel-"+ci} axis="x" defaultPosition={{'x':audioclip.location,y:0}} onDrag={this.handleDrag}>
                                            <div id={'audio-'+ci+'-'+ai} className="audioSnippet">
                                                <div className="title">
                                                Audio File {audioclip.id} : {this.msToTime((audioclip.location / this.state.spacing) * 1000)}
                                                </div>
                                                <Waveform
                                                    buffer={audioclip.buffer}
                                                    width={(audioclip.buffer && (audioclip.buffer.duration || 0)) * this.state.spacing}
                                                    height={60}
                                                    waveStyle={{
                                                        // animate waveform on draw (default: true)
                                                        animate: true,
                                                        // waveform color
                                                        color: '#95adc9',
                                                        // width of each rendered point (min: 1, max: 10)
                                                        pointWidth: 1
                                                    }}
                                                />
                                                <Button className="deleteAudio" onClick={this.deleteAudio.bind(this,ci,ai)}>
                                                    <FontAwesomeIcon icon={faWindowClose}/>
                                                </Button>
                                            </div>
                                        </Draggable>
                                    )}
                                </div>
                            )}

                        </div>

                    </div>
            </div>
        );
    }
}

export default Studio;
