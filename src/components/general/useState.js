import { useState, useEffect } from "react";
import React from 'react';
function Sample() {
    debugger;
   
    useEffect(() => {
        alert("everyTime visible");
    })

    const [name, setName] = useState({
        userName: "naga",
        height: 5,
        weight: 39
    });


    
    return (
        <div>
            <h1>{name.userName}</h1>
            <button type="button" onClick={()=> setName(previousState => {
            console.log("previousState",previousState);
               return { ...previousState, userName: "joeee" }
           })}>update Name</button>
        </div>
    )




}

export default Sample;