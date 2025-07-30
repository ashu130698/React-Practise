import CompC from "./CompC";

function CompB() {
    return ( 
        <div>
            <h2>Component B</h2>
            <CompC />
            
            {/* <CompC f_name={props.f_name}/> */}
        </div>
     );
}

export default CompB;