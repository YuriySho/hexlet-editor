import React, { memo } from 'react';
import { useButton } from './hooks';

export const Button = memo(() => {
  const { onClick, disabled } = useButton();

  return (
    <button
      type="button"
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClick}
    >
      Run
    </button>
  );
});
