import Customers from '../assets/customers.json';

function ForEach() {
    const tbody=[];
    Customers.forEach(users=>{
         tbody.push(
            <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.username}</td>
            </tr>
         )
    })
    return ( 
        <div>
            <table className="table table-striped table-borderd">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Email</th><th>Username</th></tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
     );
}

export default ForEach;