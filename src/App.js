import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MyPage from './pages/MyPage'
import UserCreatePage from './pages/UserCreatePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users/create" element={<UserCreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
