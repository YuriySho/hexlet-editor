import React from 'react';
import { Editor } from './features';

export const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">header</div>
    </nav>
    <Editor />
    <footer className="footer pb-5 mt-auto">
      <div className="container">
        footer
      </div>
    </footer>
  </div>
);
