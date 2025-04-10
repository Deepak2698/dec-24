// https://jsonplaceholder.typicode.com/albums/

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axios(){

    const [albums,setAlbums] = useState([]);
    

    useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/`)
    .then(res => { 

        //Debugger
        console.log(res);
        console.log(res.data);

        //setting up albums array using setAlbums
        setAlbums(res.data);
});
 },[])

    return(
        <div style={{textAlign: "center"}}>
            <h2>Albums</h2>
            {albums.map((value) => {
               return <p key={value.id}>
                    {value.title}
                </p>
            })}
        </div>
    )
}