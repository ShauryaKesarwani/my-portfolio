import React from 'react'

const UsersPage = async () => {
  interface User {
    id: number
    name: string
  }
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const users: User[] = await res.json()

  return (
    <div>UsersPage
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}

export default UsersPage