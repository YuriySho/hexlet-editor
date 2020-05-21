import { combineReducers } from '@reduxjs/toolkit';

import editor from './editor.js';
import terminal from './terminal.js';


export default combineReducers({
  editor,
  terminal,
});
