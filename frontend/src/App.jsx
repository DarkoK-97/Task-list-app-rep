import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Layout from './components/Layout'; // Import the Layout component
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';

function App() {
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

      {' '}
      {/* Use the Layout component */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
