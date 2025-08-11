import { useEffect } from "react";

function Usecase3() {
    useEffect(()=>{
        console.log("Component Mounted");

        return (()=>{
            console.log('Component will unmount');
        })
    },[])
    return ( 
    <div>
       <h3>Componentt 3</h3>
    </div> 
    );
}

export default Usecase3;