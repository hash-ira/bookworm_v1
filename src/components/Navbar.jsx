import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    
  return (
      <nav className="flex justify-between py-4">
            <div onClick={navigateToHome}>
                <p className="text-xl font-bold text-black">Book<span className="text-[#82A3E2]">Worm</span></p>
            </div>
            <div className= "flex justify-center self-center">
                <p className="text-sm font-bold mx-4">About</p>
                <p className="text-sm font-bold mx-4">Preferences</p>
                <p className="text-sm font-bold mx-4">Feedback</p>
            </div>
        </nav>
  )
}

export default Navbar
