import { combineReducers } from '@reduxjs/toolkit';

import editorReducer, { actions as editorActions } from './editorSlice.js';

export const rootReducer = combineReducers({
  editor: editorReducer,
});

export const setupState = (gon) => (dispatch) => {
  dispatch(editorActions.changeLanguage(gon.language));
};

const actions = {
  ...editorActions,
};
export {
  actions,
};
