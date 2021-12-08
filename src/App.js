import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MyPage from './pages/MyPage'
import PostListPage from './pages/PostListPage'
import UserCreatePage from './pages/UserCreatePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users/create" element={<UserCreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/posts" element={<PostListPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
