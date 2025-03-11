import React from "react";

function Intro(){

    // let Domain = 'React';
    // const Trainer = 'Deepak Sir';

    //Object :

    let session = {
        Domain: 'React',
        Trainer: 'Deepak Sir'
    }
    
    return(
        <div>
            <h1>
                 We are Learning {session.Domain} from {session.Trainer}

                 <p>
                    {56+45}
                 </p>
            </h1>
        </div>
    )
}

export default Intro;