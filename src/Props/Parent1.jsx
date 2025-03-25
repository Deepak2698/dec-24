
import React, { Component } from "react";
import Child1 from "./Child1";

class Parent1 extends Component{
    render(){
        return(
            <div>
                <h1>
                    Hello from Parent1
                </h1>
                <Child1/>
            </div>
        )
    }
}
export default Parent1;