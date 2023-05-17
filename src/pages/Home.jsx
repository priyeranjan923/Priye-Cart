
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex justify-center items-center  h-full bg-slate-900'>
       <Link to={"/buy"}>
        <button className="text-gray-700 border-4 h-full border-gray-700 rounded-full font-bold 
          text-[12px] p-1 px-5 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>
  )
}

export default Home
