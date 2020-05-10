import { useDispatch, useSelector } from 'react-redux';

import { updateCode } from './editorSlice';

export const useEditor = () => {
  const dispatch = useDispatch();

  const onChange = (code) => {
    dispatch(updateCode(code));
  };

  const code = useSelector((state) => state.editor.code);

  const onMount = (editor) => {
    window.addEventListener('resize', () => {
      if (editor) {
        editor.layout();
      }
    });
    editor.focus();
  };

  return {
    code,
    onChange,
    editorDidMount: onMount,
  };
};
