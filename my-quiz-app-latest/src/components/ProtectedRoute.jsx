// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  // If not logged in, redirect to login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child component
  return children;
}

export default ProtectedRoute;