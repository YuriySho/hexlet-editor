import { combineReducers } from '@reduxjs/toolkit';

import editor, { actions as editorActions } from './editor.js';
import terminal from './terminal.js';


export default combineReducers({
  editor,
  terminal,
});

export const actions = {
  ...editorActions,
};
