import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStop,faStepBackward,faStepForward,faMicrophone,faMusic,faVolumeMute, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import Slider from '@material-ui/lab/Slider';

class Studio extends Component {
    constructor(props){
        super(props);
        this.state = {
            volume: 100
        }
    }

    changeVolume = (event, volume) => {
        this.setState({ volume });
    };

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
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faStop}/>
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faPlay}/>
                        </Button>
                        <Button className={"controlButton"}>
                            <FontAwesomeIcon icon={faMicrophone}/>
                        </Button>
                        <Button className={"controlButton"}>
                            00:00:00
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
                        <div className="channel">
                            <img src="./images/guitar.png"/>
                            <div className="channel-details">
                                <p>Gady Guitar</p>
                                <FontAwesomeIcon icon={faVolumeMute}/>
                                <FontAwesomeIcon icon={faHeadphones}/>
                                <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                        value={this.state.volume}
                                        aria-labelledby="label"
                                        onChange={this.changeVolume}/>
                                <span>FX</span>
                            </div>
                        </div>
                        <div className="channel">
                            <img src="./images/guitar.png"/>
                            <div className="channel-details">
                                <p>Elinor Guitar</p>
                                <FontAwesomeIcon icon={faVolumeMute}/>
                                <FontAwesomeIcon icon={faHeadphones}/>
                                <Slider classes={{root: "volume-slider",track: "volume-track"}}
                                        value={this.state.volume}
                                        aria-labelledby="label"
                                        onChange={this.changeVolume}/>
                                <span>FX</span>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline">
                            <div className="timebar">
                            </div>
                            <div className="timebar-channel">
                            </div>
                            <div className="timebar-channel">
                            </div>
                        </div>

                    </div>
            </div>
        );
    }
}

export default Studio;
