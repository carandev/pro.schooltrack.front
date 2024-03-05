import { User } from "../types/types"

const Users = async () => {

  let response = await fetch('http://localhost:8000/school/api/V1/usuarios')

  let users: User[] = await response.json()

  return (
    <div>
      <ul>
        {users.map(u => <li>{u.primer_nombre} {u.primer_apellido}</li>)}
      </ul>
    </div>
  )
}

export default Users
