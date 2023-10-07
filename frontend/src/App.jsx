import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.8rem',
          },
        }}
      />

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/auth/register" />}
        />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />}>
          <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
