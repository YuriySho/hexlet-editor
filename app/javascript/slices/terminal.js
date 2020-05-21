/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'terminal',
  initialState: {
    stateOfRuningCode: null,
  },
  reducers: {
    runCodeSuccess(state, { payload }) {
      state.stateOfRuningCode = payload;
    },
  },
});

export const useRunCode = () => {
  const fakeResponse = 'Code has been running successful!';
  const runCode = () => new Promise((resolve) => {
    setTimeout(() => resolve(dispatch(runCodeSuccess(fakeResponse))), 1000);
  });

  return { runCode };
};


export default slice.reducer;
