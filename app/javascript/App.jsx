import React from 'react';
import { Editor } from './components';

export const App = () => (
  <main className="container-fluid my-5">
    <div className="row">
      <div className="col-6">
        <Editor />
      </div>
      <div className="col-6">
        output
      </div>
    </div>
  </main>
);
