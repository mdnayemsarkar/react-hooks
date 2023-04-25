import React, { useState } from "react";


function Watch (){

    let time = new Date().toLocaleTimeString();     //current time near jonn variable declare kora lagse
    const [ctime, setCtime]=useState(time);        //array des-structring
    const UpdateTime = () => {                      //fat arrow function   
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };



    setInterval(UpdateTime,1000);      //  1000 nenosec =1 sec//non-stop sec count hobe
    return(
<>
    <h1>
    {ctime}
    </h1>
    {/* <button onClick={UpdateTime}></button> */}
</>

    );
}
export default  Watch;