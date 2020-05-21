/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

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
    runCodeSuccess(state, { payload }) {
      state.stateOfRuningCode = payload;
    },
  },
});

const { runCodeSuccess } = slice.actions;

export const useRunCode = () => {
  const dispatch = useDispatch();

  const fakeResponse = 'Code has been running successful!';
  const runCode = () => new Promise((resolve) => {
    setTimeout(() => resolve(dispatch(runCodeSuccess(fakeResponse))), 1000);
  });

  return { runCode };
};

export const {
  updateCode,
} = slice.actions;

export default slice.reducer;
