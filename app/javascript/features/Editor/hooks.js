import { useDispatch, useSelector } from 'react-redux';

import { updateCode } from './editorSlice.js';

export const useEditor = () => {
  const dispatch = useDispatch();

  const onChange = (code) => {
    dispatch(updateCode(code));
  };

  const { code, language } = useSelector((state) => ({
    code: state.editor.code,
    language: state.editor.language,
  }));

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
    language,
    onChange,
    editorDidMount: onMount,
  };
};
