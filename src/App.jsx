import { useState } from "react";
import Parent from "./components/UseProps/parent";
import TodoApp from "./components/UseState/todoapp";
import UseCase1 from "./components/UseState/UseCase1";
import UseCase2 from "./components/UseState/UseCase2";
import UseCase3 from "./components/UseState/UseCase3";
import UseCase4 from "./components/UseState/UseCase4";
import UseCase5 from "./components/UseState/UseCase5";
import Test from "./components/UseProps/testProp";


function App() {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <>
    {/* <TodoApp />
    <UseCase1 />
    <UseCase2 />
    <UseCase3 />
    <UseCase4 />
    <UseCase5 /> */}
    <h3 className="p-2 m-2" style={{border:'2px solid green'}}>App Component :{count}</h3>
    <Parent />
    {/* //passing function as props */}
    <Test increment={increment} />


    </>
  );
}

export default App;
