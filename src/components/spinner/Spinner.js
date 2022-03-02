import React from 'react';
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex items-center justify-center mx-auto h-screen'>
      <div className="lds-ripple "><div></div><div></div></div>
      </div>
  )
}

export default Spinner