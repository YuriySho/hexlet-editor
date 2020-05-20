import { combineReducers } from '@reduxjs/toolkit';

import editorReducer, { changeLanguage } from '../features/Editor/editorSlice.js';


export const rootReducer = combineReducers({
  editor: editorReducer,
});

export const setupState = (gon) => (dispatch) => {
  dispatch(changeLanguage(gon.language));
};
