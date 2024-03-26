import './styles/App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState<string[]>([])
    console.log(users)
    useEffect(() => {
        axios.get('http://localhost:5000/api')
            .then(res => {
                let usersArray = res.data.users;
                setUsers(usersArray)
            })
    }, [])


  return (
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
