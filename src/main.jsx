import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import './App.css'; // Import component-specific styles
import App from './App'; // Import App component

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
