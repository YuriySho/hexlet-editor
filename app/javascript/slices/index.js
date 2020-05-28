import { combineReducers } from '@reduxjs/toolkit';
import editorReducer, { actions as editorActions } from './editorSlice.js';
import terminal, { runCode } from './terminal.js';


export const rootReducer = combineReducers({
  editor: editorReducer,
  terminal,
});

export const setupState = (gon) => (dispatch) => {
  dispatch(editorActions.changeLanguage(gon.language));
};

const actions = {
  ...editorActions,
};

const asyncActions = {
  runCode,
};

export { actions, asyncActions };
