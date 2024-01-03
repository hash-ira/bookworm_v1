import React from 'react'
import spinner from './../../public/assets/infinite-spinner.svg'

function Loader() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
        <div>
            <img src={spinner} className='w-36 h-36'/>
        </div>
    </div>
  )
}

export default Loader
