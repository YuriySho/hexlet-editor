import React from 'react';
import { Editor } from './features';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">header</div>
    </nav>
    <Editor />
    <footer className="footer pb-5 mt-auto">
      <div className="container">
        jopa
      </div>
    </footer>
  </div>
);

export default App;
