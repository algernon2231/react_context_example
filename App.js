import React , {useState, useMemo} from 'react'
import {  BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { Index } from './pages/index'
import { About } from './pages/about'
import { UserContext } from './UserContext'

const App = () => {
  const [user,setUser] = useState(null)
  
  //const userValue = useMemo(() => ({user,setUser}),[user])

  const userValue =  useMemo(() => [user,setUser], [user,setUser])
  

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to = '/'>Home</Link></li>
              <li><Link to = '/about/'>About</Link></li>
            </ul>
          </nav>
          <UserContext.Provider value = {userValue} >
               <Switch>
                <Route path= '/' exact component = {Index} />
                <Route path = '/about/' exact component = {About} />
             </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    );
}

export default App