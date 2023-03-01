import React from 'react'
import Home from './container/Home';
import Login from './components/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={ process.env.REACT_APP_GOOGLE_API_TOKEN }>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App