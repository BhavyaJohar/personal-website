// src/main.jsx (or index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client in React 18
import App from './App';
import './index.css'; // Assuming you have some global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // This is the new way
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
