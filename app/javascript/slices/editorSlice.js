/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    language: 'javascript',
    code: '// happy hacking!',
  },
  reducers: {
    updateCode(state, { payload }) {
      state.code = payload;
    },
    changeLanguage(state, { payload }) {
      state.language = payload;
    },
  },
});

const actions = { ...slice.actions };
export { actions };

export default slice.reducer;
