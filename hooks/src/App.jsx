// import { useEffect, useState } from "react";
// import Useeffect1 from "./HOOKS/useeffect";
// // import UseState1 from "./HOOKS/UseState";
// // import UseState2 from "./HOOKS/UseState2";

import { useContext } from "react";
import ThemeComponent from "./HOOKS/Context API/ThemeComponent";
import { ThemeContext } from "./HOOKS/Context API/ThemeContext";

// function App() {
//   const [index,setIndex]=useState(0);
//   const Names=['Ashu','saurabh','saurabh','shalu']
//    useEffect(()=>{
//     if(index===Names.length -1)
//       return;
//     setTimeout(()=>{
//         setIndex((index)=>index+1)
//     },2000);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[index])
//   return ( 
//   <div>
//     {/* <UseState1 />
//     <UseState2 /> */}
//     <Useeffect1 name={Names[index]}/>

//   </div> 
//   );
// }

// export default App;

function App() {
  const {theme,toggleTheme}=useContext(ThemeContext);
  return ( 
  <div className="container m-2">
     <h2>Test : {theme}</h2>
     <button onClick={toggleTheme}>Toggle Theme</button>
     <ThemeComponent />
  </div> );
}

export default App;