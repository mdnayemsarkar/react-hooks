import React, { useState } from "react";
import "./Button-ii.css";



function Time (){
    // hooks part starts here 
    let newTime = new Date().toLocaleTimeString();   //hooks
    const [current_time,setCtime]=useState(newTime); //array



const UpdateTime =()=>{
    let newTime = new Date().toLocaleTimeString();    //hooks
    setCtime(newTime);
}
// hooks parts ends here 
    return(
       <>
        <h1>{current_time}</h1>
        <button onClick={UpdateTime}>Get Time</button>
       </>
    );   
};

export default Time;