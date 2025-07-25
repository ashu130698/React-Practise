import './header.css';
function header() {
    return ( 
        <div>
            const name ="Ashu";
  const loggedIn = false;
  const user = {id:1,name:'sonam',email:'ashukla299@gmail.com',country:'india'};
  const array = [
    {id:1,name:'ashu'}, 
    {id:2,name:'saurabh'}, 
    {id:3,name:'aman'}, 
    {id:4,name:'ayush'}
  ]
  return (
      
      <h1>Welcome {name}</h1>
      <h2 style={{backgroundColor:'blue',color:'white',padding:'5px'}}>My sample</h2>
      <button>{loggedIn ? 'logout' : 'login'}</button>
      <p>{user.id}, {user.name}, {user.email}, {user.country}</p>
      <Header></Header>
      <Card></Card>
      <table>
       <thead><tr><th>Id</th><th>Name</th></tr></thead>
       <tbody>
        {
          array.map(item=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))
        }
        </tbody> 
      </table>
    </div>
  );
        </div>
     );
}

export default header;