import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStop,faStepBackward,faStepForward,faMicrophone,faMusic,faVolumeMute, faHeadphones,faPause } from '@fortawesome/free-solid-svg-icons'
import Slider from '@material-ui/lab/Slider';
import BufferLoader from '../scripts/BufferLoader'
import Draggable from 'react-draggable';
import DATA from '../exampleData.js';
import Waveform from 'waveform-react';

class Studio extends Component {
    constructor(props){
        super(props);
        this.state = {
            volume: 100,
            spacing: 8,
            runningTime: 0,
            playing: true,
            playbackTime: 0,
            channelData: DATA,
            loading:true,
        };

        const mappedArr = [];
        DATA.forEach((channel)=>{
            channel.audioClips.forEach((audioClip)=>{
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
        const that = this;

        function finishedLoading(bufferList) {
            let i = 0;
            const data = that.state.channelData;
            data.forEach((channel,chIndex)=>{
                channel.audioClips.forEach((audioClip,acIndex)=>{
                    data[chIndex].audioClips[acIndex].buffer = bufferList[i];
                    i++;
                })
            });
            that.setState({context,loading:false,channelData:data});
        }
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
            channel.audioClips.forEach((audio,ai) => {
                let bufferSource = this.state.context.createBufferSource();
                bufferSource.buffer = audio.buffer;
                bufferSource.connect(this.state.context.destination);
                bufferSource.start(this.state.context.currentTime + audio.location/this.state.spacing);
                channelData[ci].audioClips[ai].bufferSource = bufferSource;
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
            channel.audioClips.forEach((audio) => {
                audio.bufferSource.stop(this.state.context.currentTime);
            })
        });
        this.state.context.suspend();
        this.setState({runningTime: 0, status: false, suspended: true });
    };
    getTime = () => {
        return this.state.context.currentTime
    };

    handleDrag = (e,data) => {
        const channelData = this.state.channelData;
        const loc = data.node.id.split('-');
        channelData[loc[1]].audioClips[loc[2]].location = data.x;
        this.setState(channelData);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <div className="header">
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
                            {this.msToTime(this.getTime()*1000)}
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faMusic}/>
                        </Button>
                        <Button className={"controlButton"}>
                            120 BPM
                        </Button>
                        <Button className={"controlButton"}>
                            Cmaj
                        </Button>
                        <Button className={"controlButton"}>
                            4/4
                        </Button>
                    </div>
                </div>
                    <div className="channels">
                        {this.state.channelData.map((channel,key) =>
                            <div key={channel.id} className="channel">
                                <img src="./images/guitar.png"/>
                                <div className="channel-details">
                                    <p>{channel.title}</p>
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
                    </div>
                    <div className="timeline-container">
                        <div className="playLine" style={{'left': (this.state.runningTime/1000) * (this.state.spacing)}}/>
                        <div className="timeline">
                            <div className="timebar"></div>
                            {this.state.channelData.map((channel,ci) =>
                                <div key={channel.id} className="timebar-channel">
                                    {channel.audioClips.map((audioclip,ai) =>
                                        <Draggable key={audioclip.id} bounds="parent" axis="x" defaultPosition={{'x':audioclip.location,y:0}} onDrag={this.handleDrag}>
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
