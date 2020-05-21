/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const runCode = createAsyncThunk(
  'terminal/runCode',
  async () => {
    const fakeResponse = 'Code has been running successful!';
    await new Promise((resolve) => {
      setTimeout(() => resolve(fakeResponse), 1000);
    });
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

export default slice.reducer;
