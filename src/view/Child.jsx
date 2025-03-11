

import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.student} is Learning : {this.props.dataFromParent}
                </h1>
            </div>
        )
    }
}

export default Child;