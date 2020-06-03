/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    language: 'javascript',
    code: '// happy hacking!\n',
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

export const { actions } = slice;

export default slice.reducer;
