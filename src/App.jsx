import React from 'react'
import Navbar from './component/Navbar'
import Aceuil from './component/pages/Aceuil'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Opening from './component/pages/Opening';
import Interviews from './component/pages/Interviews';
import Workshops from './component/pages/Workshops';
import Imgp from './component/pages/imgp';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Aceuil/>} />
        <Route path='/Opening' element={<Opening/>} />
        <Route path='/Iterviews' element={<Interviews/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
      </Routes>
      
    </>
  )
}

export default App
