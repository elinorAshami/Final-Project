import React, { Component } from 'react';
// import './App.css';

class Waveform extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        // this.props = {
        //     // width: 500,
        //     // height: 100,
        //     zoom: 1,
        //     color: 'black'
        // }
    }
    componentDidMount() {
        var width = this.props.width * 1;
        var middle = this.props.height / 2;

        var channelData = this.props.buffer.getChannelData(0);
        var step = Math.ceil(channelData.length / width);

        var ctx = this.refs.canvas.getDOMNode().getContext('2d');
        ctx.fillStyle = 'black';
        this.draw(width, step, middle, channelData, ctx);
    }

    draw(width, step, middle, data, ctx) {
        for (var i = 0; i < width; i += 1) {
            var min = 1.0;
            var max = -1.0;

            for (var j = 0; j < step; j += 1) {
                var datum = data[(i * step) + j];

                if (datum < min) {
                    min = datum;
                } else if (datum > max) {
                    max = datum;
                }

                ctx.fillRect(i, (1 + min) * middle, 1, Math.max(1, (max - min) * middle));
            }
        }
    }
    render() {
        return (
            <canvas
                ref="canvas"
                className="waveform"
                width={this.props.width * 1}
                height={this.props.height}></canvas>
        );
    }
}

export default Waveform;
