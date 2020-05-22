import { combineReducers } from '@reduxjs/toolkit';

import editor, { actions as editorActions } from './editor.js';
import terminal, { runCode } from './terminal.js';


export default combineReducers({
  editor,
  terminal,
});

const asyncActions = {
  runCode,
};

const actions = {
  ...editorActions,
};

export { actions, asyncActions };
