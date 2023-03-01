import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import { CreatePin, Feed, Navbar, PinDetail, Search } from "../components";
export const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='px-2 md:px-5'>
      <div className="bg-gray-50">
        <Navbar SearchTerm={ searchTerm } setSearchTerm={setSearchTerm} user={user && user }/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin_detail/:pinId" element={<PinDetail user={user} />} />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  )
}
