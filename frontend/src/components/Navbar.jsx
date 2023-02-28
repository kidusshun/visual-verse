import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({searchTerm, setSearchTerm, user}) => {
  const navigate = useNavigate();
  if(!user) return null;

  return (
    <div className="flex justify-between gap-2 md:gap-5 w-full mt-5 pb-7">
      <img src={user.image} alt="" />
      <div className='flex justify-start items-center px-2 w-3/4 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={21} className='ml-1' />
        <input 
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search'
        value={searchTerm} 
        onFocus={() => navigate('/search')}
        className="p-22 w-full bg-white outline-none"
         />
      </div>
      <div className='flex gap-3'>
        <Link to={`user-profile/${user?._id}`} className='hidden md:block'>
          <img src={user.image} alt="" className='w-1/8 rounded-full'/>
        </Link>
        <Link to='create-pin' className='bg-black text-white rounded-lg w-1/8 h-12 md:w-14 flex justify-center items-center'>
          <IoMdAdd />
        </Link>
      </div>
    </div>
  )
}

export default Navbar