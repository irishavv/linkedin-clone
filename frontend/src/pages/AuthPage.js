import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './AuthPage.css'; // Add some basic styling

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      {showLogin ? (
        <>
          <Login />
          <p className="toggle-form">
            Don't have an account?{' '}
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <Signup />
          <p className="toggle-form">
            Already have an account?{' '}
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthPage;