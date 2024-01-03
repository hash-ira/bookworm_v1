import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search';
import Navbar from './components/Navbar';
import SearchDetails from './components/SearchDetails';

function App() {

  const [inputValue, setInputValue] = React.useState('');
  return (

    <div className="px-[1.5rem]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home inputValue={inputValue} setInputValue={setInputValue}/>}/>
        <Route path="/search" element={<Search inputValue={inputValue} setInputValue={setInputValue}/>}/>
        <Route path="/search/:id" element={<SearchDetails />} />
      </Routes>
    </div>

  )
}

export default App
