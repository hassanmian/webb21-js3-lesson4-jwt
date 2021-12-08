import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserCreatePage from './pages/UserCreatePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/users/create" element={<UserCreatePage />} />
      </Routes>
     
    </div>
  );
}

export default App;
