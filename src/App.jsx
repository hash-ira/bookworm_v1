import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {

  return (

    <div className="px-[1.5rem]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </div>

  )
}

export default App
