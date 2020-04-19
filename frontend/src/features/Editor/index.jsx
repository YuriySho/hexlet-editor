import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = () => {
  const [code] = useState('// happy hacking!');

  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  const editorDidMount = (editor) => {
    editor.focus();
  };

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;
