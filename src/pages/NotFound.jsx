import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '10rem 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Error 404: Engineer Not Found... yet.</h2>
      <Link to="/" className="btn-primary">Return to Base</Link>
    </div>
  );
};

export default NotFound;
