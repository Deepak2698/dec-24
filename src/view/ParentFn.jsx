
import React from "react";
import ChildFn from "./ChildFn";

function ParentFn(){
    return(
        <div>
           <ChildFn dataFromParent = 'passing props in functional Component' student = 'Vedang'/>
        </div>
    )
}

export default ParentFn;