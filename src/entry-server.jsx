// Build-time server entry, used only by scripts/prerender.js.
//
// Renders a route's full markup to a string so each prerendered page ships
// real content (not just an empty #root) to crawlers and link scrapers. The
// client then hydrates that markup in main.jsx.

import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on('finish', () => resolve(html));

    // Pages are React.lazy chunks, so wait for every Suspense boundary to
    // resolve (onAllReady) rather than emitting the loading fallback.
    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError: reject,
      }
    );
  });
}
