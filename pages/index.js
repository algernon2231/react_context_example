import React, {useContext} from 'react'
import { UserContext} from '../UserContext'
import { login } from '../user'

export const Index = () => {
   const [ user, setUser ] = useContext(UserContext)
  return(
    <div>
      <h1>Index</h1>
      {user && <pre>{JSON.stringify(user, null ,2)}</pre> }
       {user ? (
         <button onClick = {() => setUser(null)}>Logout</button>
       ) : (
         <button onClick = { async () => {
            const user = await login()
            setUser(user)
         } }>LogIn</button>
       )}
    </div>
  )
}