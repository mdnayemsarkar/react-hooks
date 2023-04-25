import React, { useState } from "react";


function Bg (){
   const purple ="green";
   const [bg, setBg]= useState(purple);
   const [name, setName]=useState('click me');


   const bgChange = () => {

    let newBg = "#34495e";
    setBg(newBg);
    setName('opsss!!');
   };
   const bgBack =() =>{
    setBg(purple);
     setName('ayyyoooo!!!!')
   };


    return(
        <>
       <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
        {name}
        </button>
       </div>
       </>
    );
}
export default Bg;