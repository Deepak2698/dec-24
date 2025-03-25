

import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h1>
                    We are Learning : {this.props.dataFromParent}
                </h1>
            </div>
        )
    }
}

export default Child;