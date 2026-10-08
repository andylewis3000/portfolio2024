import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const app = (
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

const rootEl = document.getElementById('root');

// Prerendered pages (see scripts/prerender.js) ship real markup in #root, so
// hydrate it. The dev server and the SPA fallback shell have an empty #root.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app);
} else {
  ReactDOM.createRoot(rootEl).render(app);
}
