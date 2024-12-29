import React, {  createContext, useState } from 'react'
import  { Profile } from "./Profile";
import { EditUser } from "./EditUser";


export const UserContext = createContext({});

export default function UserDashboard() {
    const [user, setuser] = useState({name: "raji", age:23 })
  return (
    <div>
        <UserContext.Provider value={{ user: user, setuser: setuser}} >
      <Profile />
      <EditUser  setuser={setuser} />
      </UserContext.Provider>
    </div>
  )
}
