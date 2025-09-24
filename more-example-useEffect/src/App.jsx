import { useState } from "react"
import Form from "./form";


function App() {
  const [users, setUsers] = useState([]);
  const addUser = (obj) => {
    setUsers([...users, obj]);
  }
  return (
    <div>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th></tr>
          <tbody>
            {
              users.map((user) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{ user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </thead>
      </table>
      <Form addUser={addUser} />
    </div>
  )
}

export default App
