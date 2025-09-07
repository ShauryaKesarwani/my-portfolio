import React from 'react'

const UsersPage = async () => {
  interface User {
    id: number
    name: string
  }
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <div>
      <h3 className='text-2xl'>Users</h3>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UsersPage