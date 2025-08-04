import { useState } from "react";

const users=[
    {id:1,name:'Alice',online: true},
    {id:2,name:'Ashu',online: true},
    {id:3,name:'Ashiya',online: false},
    {id:4,name:'Arjun',online: true},
    {id:5,name:'Saksham',online: false}
]

function FilteredData() {
    const[show,setShow]=useState(true);
    const filteredUser = users.filter(users=>users.online == show);
    return ( 
        <div>
            <h3>Filterd Data</h3>
            <button onClick={()=>setShow(!show)}>{show?'Show Offline':'Show Online'}</button>
            <ul>
                {
                    filteredUser.map(user=>(
                        <li>{user.id} {user.name}- Status:{show? 'Online' :'Offline'}</li> //<i className="fa-solid fa-circle fa-sm" style={{color : '#07ed58'}}></i>
                    ))
                }
            </ul>

        </div>
     );
}

export default FilteredData;