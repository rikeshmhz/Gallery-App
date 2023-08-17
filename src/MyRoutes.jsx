import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './pages/Data'
import Displaydetails from './pages/Displaydetails'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Data/>}/>
                <Route path='/detail/:id' element={<Displaydetails/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes