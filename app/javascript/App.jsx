import React from 'react';
import { Editor, Terminal } from './components';

export const App = () => (
  <main className="container-fluid my-5">
    <div className="row">
      <div className="col-6">
        <Editor />
      </div>
      <div className="col-6">
        <Terminal />
      </div>
    </div>
  </main>
);
