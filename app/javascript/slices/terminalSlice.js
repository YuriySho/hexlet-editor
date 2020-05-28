/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const runCode = createAsyncThunk(
  'terminal/runCode',
  async () => {
    const fakeRunCode = () => 'Code has been running successful!';
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve(fakeRunCode()), 1000);
    });
    return response;
  },
);

const slice = createSlice({
  name: 'terminal',
  initialState: {
    stateOfRuningCode: null,
  },
  reducers: {
  },
  extraReducers: {
    [runCode.fulfilled]: (state, { payload }) => {
      state.stateOfRuningCode = payload;
    },
  },
});

const actions = { ...slice.actions };
export { actions };

export default slice.reducer;
