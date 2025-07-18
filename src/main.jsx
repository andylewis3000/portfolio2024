import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/">
      {/* <Router basename="/"> */}
      {/* [ ] Need to add basename path when deploying a build, needs to match vite.config / Comment out when in development */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
