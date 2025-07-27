import Child from "./child";


function Parent() {
    return ( 
        <div className="p-2 m-2" style={{border: '2px solid red'}}>
            <h3>Parent Component</h3>

            <Child name="Ashu" 
            message="Good Morning" />
            <Child name="Saurabh" 
            message="Overthing is bad" />
        </div>
        
     );
}

export default Parent;