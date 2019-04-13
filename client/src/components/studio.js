import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faStop,faStepBackward,faStepForward,faMicrophone,faMusic } from '@fortawesome/free-solid-svg-icons'

class Studio extends Component {
    render() {
        return (
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
        );
    }
}

export default Studio;
