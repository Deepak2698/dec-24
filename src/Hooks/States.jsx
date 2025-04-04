
import React, { Component } from "react";

class States extends Component{

    constructor(){
        super();
        this.state = {
            // subject:'Next.js'
            count : 0
        }
    }

    // changeSubject(event){
    //     this.setState({
    //         subject: 'React'
    //     })
    // }

    increment(event){
        this.setState ({count : this.state.count + 1})
    }

    decrement(event){
        this.setState ({count : this.state.count - 1})
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={(event) => {this.increment(event)}}>+1</button>
                <button onClick={(event) => {this.decrement(event)}}>-1</button>
                <button onClick={() => {this.setState({count: this.state.count + 2})}}>+2</button>

                {/* <button onClick={(event) => {this.changeSubject(event)}}>
                    change-subject
                </button> */}
            </div>
        )
    }
}

export default States;