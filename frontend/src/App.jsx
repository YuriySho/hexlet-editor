import React from 'react';
import { Editor, Navbar } from './features';

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Editor />
    <footer>footer</footer>
  </>
);

export default App;
