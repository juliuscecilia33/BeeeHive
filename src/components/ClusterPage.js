import React, { Component } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { ClassBar } from './ClassBar';

export class ClusterPage extends Component {
    state = {
        width: 800,
        height: 500,
        brushRadius: 5,
    }

    render() {
        return(
            <>
                <ClassBar />
                <div className='clusterPage'>
                    <div>
                        <h1>Cluster Page</h1>
                        <div>
                            <div className="buttons">
                                <button className="undobtn" id='undo' onClick={() => {this.saveableCanvas.undo();}}><p>Undo</p></button>
                                <button className="clearbtn" id='clear' onClick={() => {this.saveableCanvas.clear();}}><p>Clear</p></button>
                            </div>
                            
                            <CanvasDraw id='whiteboard' ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                                canvasWidth={this.state.width}
                                canvasHeight={this.state.height}
                                brushRadius={this.state.brushRadius}/>
                        </div>
                    </div>
                </div>
            </>
        )};
};
