import CompB from "./CompB";

function CompA() {
    return ( 
        <div>
            <h2>PropDrill ComA</h2>
            <CompB />
            
            {/* <CompB f_name={props.f_name}/> */}

        </div>
     );
}

export default CompA;

// //so, in propdrill we basically nested the component or sending the data btw components but not directly
// //we have to first send A to B, B to C and then so on.
// //Here, we also use contextapi which send data diretly comp A to C with the help of Provider(App.jsx), Consumer(CompC) and the Context(Data)
// //It also create callback hell like situation like if we have to send multiple data we have to provide multiple provider and consumer like
// example : import { createContext } from "react";
// import CompA from "./PropDrillling/PropDrill/CompA";

// const studentinfo=createContext()
// const studentinfo1=createContext()
// function App() {
//   const f_name ='Ashutosh'
//   const l_name ='Shukla'
//   return (  
//     <div>
//       <studentinfo.Provider value={f_name}>
//         <studentinfo1.Provider value={l_name}>
//           <CompA />

//         </studentinfo1.Provider>
        
//       </studentinfo.Provider>
      

//     </div>
//   );
// }

// export default App;
// export {studentinfo,studentinfo1}

//This is a app.jsx file it looks like this