import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../slices/index.js';

const { updateCode } = actions;

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
