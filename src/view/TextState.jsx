
import React, { Component } from "react";

class TextState extends Component{

    constructor(){
        super();
        this.state = {
            domain : 'React'
        }
    }

    changeText(event){
        this.setState({
            domain: 'Java'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.domain}</h1>
                <button onClick={(event) => {this.changeText(event)}}>
                    Change
                </button>
            </div>
        )
    }
}

export default TextState;