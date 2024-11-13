import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Dashboard from './components/Dashboard'
import Surveillance from './components/Surveillance'
import Database from './components/Database'
import Accesscontrol from './components/Accesscontrol'
import Mapview from './components/Mapview'
import Settings from './components/Settings'
import Suspects from './components/Suspects'
import Nav from "./components/Nav"

const App = () => {
  return (
    <Routes>
      <Route element={<Nav />}>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/surveillance' element={<Surveillance/>}/>
        <Route path='/database' element={<Database/>}/>
        <Route path='/accesscontrol' element={<Accesscontrol/>}/>
        <Route path='/mapview' element={<Mapview/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/suspects' element={<Suspects/>}/>
      </Route>
    </Routes>
  )
}

export default App
