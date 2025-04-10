
import React, { useState } from "react";

export default function States1(){

    // const [state, setState] = useState(initialState)

    const [count, setCount] = useState(0);
    const [name,setName] = useState('Vaibhav');

    return(
        <div>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <button onClick={() => {setCount(count => count + 1)}}>+1</button>
            <button onClick={() => {setCount(count => count - 1)}}>-1</button>
            <button onClick={() => {setName('Vaishnavi')}}>Change-name</button>
        </div>
    )
}