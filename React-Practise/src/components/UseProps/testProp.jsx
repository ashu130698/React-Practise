function Test(props) {
    return ( 
        <div className="p-2 my-2" style={{border:'2px solid black'}}>
            <h3>Test Component</h3>
            <button onClick={props.increment}>Click to Inc</button>
        </div>
     );
}

export default Test;