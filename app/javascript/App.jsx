import React from 'react';
import { Editor, Terminal, Button } from './components';

export const App = () => (
  <main className="container-fluid my-5">
    <div className="row mb-4">
      <div className="col-12">
        <Button />
      </div>
    </div>
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
