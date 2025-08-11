
import { useState } from "react";
import Usecase1 from "./Components/Usecase1"
import Usecase2 from "./Components/Usecase2"
import Usecase3 from "./Components/Usecase3"
import Timer from "./Components/Timer";
import Usecase4 from "./Components/Usecase4";


function App() {
  // const [flag,setFlag]=useState(false);
  return (
    <div className="container">
      <Usecase4 />
      {/* <Timer /> */}
      {/* <h3>UseEffect Examples</h3>
      <button onClick={()=>setFlag(!flag)}>{flag?'Hide Comp' : 'Show Comp'}</button>
      {flag?<Usecase3 />:''} */}
      {/* <Usecase2 /> */}
      {/* <Usecase1 /> */}
    </div>
      
    
  )
}

export default App
