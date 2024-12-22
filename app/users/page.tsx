import React from 'react'

interface User{
  id : number;
  name : string;
}
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const user : User[] = await res.json();
  return (
    <>
      <h1>Users List</h1>
      <ul>
        {user.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage