import { useDispatch, useSelector } from 'react-redux';

import { updateCode } from './editorSlice';

export const useEditor = () => {
  const dispatch = useDispatch();

  const onChange = (code) => {
    dispatch(updateCode(code));
  };

  const code = useSelector((state) => state.editor.code);

  return {
    code,
    onChange,
  };
};
