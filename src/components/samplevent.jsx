import './sampleev.css';
function SampleEvent() {

    const handleClick=()=>{
        alert('button clicked');
    }
    return ( 
        <div>
            <button onClick={handleClick}>Alert</button>
            <button onClick={()=>alert("Triggerd Click")}> click me</button>
        </div>
     );
}

export default SampleEvent;