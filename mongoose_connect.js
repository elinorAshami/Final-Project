var consts = require('./consts');
    mongoose = require('mongoose');
mongoose.connect(consts.MLAB_KEY);
var conn = mongoose.connection;//get default connection
conn.on('error',
    (err) => {
        console.log(`connection error: ${err}`);
    });
conn.once('open',
    () => {
        console.log('connected');
        mongoose.disconnect();
});

