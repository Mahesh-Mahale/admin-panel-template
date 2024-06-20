import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  }, [navigate]);

  return null; // You can also return a simple message or a loading spinner
};

export default Logout;
