

import React from "react";

function ChildFn(props){
    return(
        <div>
            <h2> 
                {props.student} is Learning : {props.dataFromParent}
            </h2>
        </div>
    )
}

export default ChildFn;