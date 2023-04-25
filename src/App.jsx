import React, { useState } from 'react';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App (){
//   return(
// <div><h1>Nayeem sarkar</h1></div>
//   );
// };
// export default App; 




function App(){
  const state = useState();
// console.log (state);
const [count,setCount] =useState(0);


const IncNum = () =>{
  setCount(count + 1);
  // console.log("clicked" + count++);
};
  return (
    <>
    <p>
        This Button for Increment:
       </p>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};
export default App;