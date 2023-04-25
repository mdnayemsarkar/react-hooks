import React, { useState } from 'react';
import './Button-ii.css';



function BUtton (){
const state =useState();    
// useState ta akhane react ar hooks ja function ar vitore a rekhe kora jai..hooks use hoi app ke interactive korar jonno  
const [count, setCount]=useState(0);
// arrays are are used to store multiple value in a single variable /


const IncNum =()=>{
    setCount(count -1);
};
return(
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Here</button>
    </>
);
};
export default  BUtton;