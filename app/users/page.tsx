// Run app in dev mode - npm run dev
// In order to build application in prod level 
//   1. npm run build
//   2. npm start 

import build from 'next/dist/build'
import React from 'react'
import { ProgramUpdateLevel } from 'typescript'

interface User{
  id : number;
  name : string;
}
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const user : User[] = await res.json();
  return (
    <>
      <h1>Users List</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {user.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage