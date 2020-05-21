import { combineReducers } from '@reduxjs/toolkit';

import editorReducer from '../features/Editor/editorSlice.js';


export const rootReducer = combineReducers({
  editor: editorReducer,
});
