/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'editor',
  initialState: {
    error: false,
    isFetching: false,
    code: '// happy hacking!',
  },
  reducers: {
    updateCode(state, { payload }) {
      state.code = payload;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
