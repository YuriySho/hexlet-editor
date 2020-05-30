import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncActions } from '../../slices/index.js';

const { runCode } = asyncActions;

export const Button = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => dispatch(runCode())}
    >
      Run
    </button>
  );
};
