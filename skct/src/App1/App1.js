import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Home from '../Homepage/Home'
import Loginpage from '../Loginpage/Loginpage'
import Signup from '../Signup/Signup'
import Layout1 from '../Layout1/Layout1'

const App1 = () => {
  return (
    <div><BrowserRouter>
    <Router><Route path="/"element={<Layout1/>}>
        <Route index element={<Home/>}/>
        <Route path="Login"element={<Loginpage/>}/>
        <Route path="Signup"element={<Signup/>}/>

        </Route>
        </Router>
        </BrowserRouter></div>
  )
}

export default App1