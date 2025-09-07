import React from 'react';

interface User {
  id: number
  name: string
  email: string
}


const UserIDPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const {id} = await params;
  const userId = Number(id);
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // using find to get the user
  const user = users.find((u: User) => u.id === userId);

  // using map with if
  // const userList = users.map((u: any) => {
  //   if (u.id === userId) {
  //     return (
  //       <li key={u.id}>{u.name} ({u.email})</li>
  //     );
  //   }
  //   return null;
  // });

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <ul>
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ) : (
        <p>User not found.</p>
      )}

      {/* Example of using map with if (not recommended for single user): */}
      {/* <ul>{userList}</ul> */}
    </div>
  );
};

export default UserIDPage;