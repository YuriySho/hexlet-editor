import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import { useEditor } from './hooks';

export const Editor = () => {
  const {
    code,
    onChange,
  } = useEditor();

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
