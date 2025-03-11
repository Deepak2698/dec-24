
import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
                <Child dataFromParent= 'passing props in class component' student = 'Vedang'/>
            </div>
        )
    }
}

export default Parent;