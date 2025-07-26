import { useState } from "react";
import Customers from '../assets/customers.json';
import CustomerDetails from "./CustomerDetails";

function CustomerList() {
    const[ customers,setCustomers]=useState(Customers);
    const [selected,setSelected]=useState(Customers[0]);
    return ( 
        <div>
            <h3 className="p-2 text-bg-success text-center">Customer List</h3>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Email</th><th>Username</th><th>Operations</th></tr>
                    </thead>
                    <tbody>{
                        customers.map(cust=>(
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td>{cust.name}</td>
                                <td>{cust.email}</td>
                                <td>{cust.username}</td>
                                <td><button className="btn btn-primary" onClick={()=>setSelected(cust)}>👁</button></td>
                            </tr>
                        ))
                        }
                        
                    </tbody>
                
            </table>
            <div className="row">
                <div className="col"><CustomerDetails selected={selected} /></div>
                <div className="col"></div>
            </div>
        </div>
     );
}

export default CustomerList;