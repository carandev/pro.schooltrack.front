import { User } from "../../types/User"

const Users = async () => {
  let users: User[] = []
  let errorMessage = ''

  try {
    let response = await fetch('http://localhost:8000/school/api/V1/usuarios', {
      cache: 'no-cache',
    })
    users = await response.json()
  } catch (error: any) {
    errorMessage = error.message
  }

  if (errorMessage) {
    return <div className="py-2 px-4 m-2 rounded bg-red-400 border-red-600">
      Ocurrió un error al obtener los datos {errorMessage}
    </div>
  }

  return (
    <div>
      {
        users && users.length > 0
          ? <ul>
            {users.map(u => <li key={u.id}>{u.primer_nombre} {u.primer_apellido}</li>)}
          </ul>
          : <div className="py-2 px-4 m-2 rounded bg-blue-400 border-blue-700">
            No hay usuarios registrados
          </div>
      }
    </div>
  )
}

export default Users
