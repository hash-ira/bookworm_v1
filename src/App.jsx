import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search';
import Navbar from './components/Navbar';
import SearchDetails from './components/SearchDetails';

function App() {

  const [inputValue, setInputValue] = React.useState('');
  const [loading , setLoading] = React.useState(true);
  const [arrData, setArrData] = React.useState([]);
  const [itemIndex , setItemIndex] = React.useState();

  return (

    <div className="px-[1.5rem]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home 
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                    />}/>

        <Route path="/search" element={<Search 
                                    inputValue={inputValue} 
                                    setInputValue={setInputValue}
                                    loading={loading}
                                    setLoading={setLoading}
                                    arrData={arrData}
                                    setArrData={setArrData}
                                    itemIndex = {itemIndex}
                                    setItemIndex = {setItemIndex}/>}/>

        <Route path="/search/:id" element={<SearchDetails
                                    arrData={arrData}/>} />
      </Routes>
    </div>

  )
}

export default App
