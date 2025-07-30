import { createContext } from "react";
import CompA from "./PropDrillling/PropDrill/CompA";

const studentinfo=createContext()
const studentinfo1=createContext()
function App() {
  const f_name ='Ashutosh'
  const l_name ='Shukla'
  return (  
    <div>
      <studentinfo.Provider value={f_name}>
        <studentinfo1.Provider value={l_name}>
          <CompA />

        </studentinfo1.Provider>
        
      </studentinfo.Provider>
      

    </div>
  );
}

export default App;

// eslint-disable-next-line react-refresh/only-export-components
export {studentinfo,studentinfo1}