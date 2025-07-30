import React from "react";

// eslint-disable-next-line no-unused-vars
import { studentinfo,studentinfo1 } from "../../App";

function CompC() {
    return ( 
        <div>
            <studentinfo.Consumer>
                {(getf_name)=>{
                    return <studentinfo1.Consumer>
                        {(getl_name)=>{
                            return <h3>My name is {getf_name}{getl_name}</h3>
                        }}
                    </studentinfo1.Consumer>

                }}
            </studentinfo.Consumer>
            {/* <h2>Component C</h2>
            <h3>My name is {props.f_name}</h3> */}
        </div>
     );
}

export default CompC;