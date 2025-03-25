
import React from "react";
import ChildFn from "./ChildFn";

function ParentFn(){
    return(
        <div>
           <ChildFn dataFromParent = 'passing props' name = 'Anuja'/>
        </div>
    )
}

export default ParentFn;