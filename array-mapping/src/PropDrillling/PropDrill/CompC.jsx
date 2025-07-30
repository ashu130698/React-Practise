import React, { useContext } from "react";

 
import { studentinfo,studentinfo1 } from "../../App";

function CompC() {
    const f_name=useContext(studentinfo) //useContext is a hook
    const l_name=useContext(studentinfo1)
    return ( 
        <div>
            <h3>My name is {f_name} {l_name}</h3>
            {/* <studentinfo.Consumer>
                {(getf_name)=>{
                    return <studentinfo1.Consumer>
                        {(getl_name)=>{
                            return <h3>My name is {getf_name}{getl_name}</h3>
                        }}
                    </studentinfo1.Consumer>  //look at this this is look a like callback hell

                }}
            </studentinfo.Consumer> */}
            {/* <h2>Component C</h2>
            <h3>My name is {props.f_name}</h3> */}
        </div>
     );
}

export default CompC;