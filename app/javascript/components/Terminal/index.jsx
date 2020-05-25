import React from 'react';
import PropTypes from 'prop-types';
import XTerm from 'react-xterm';
import 'xterm/css/xterm.css';

const runTerminal = (xterm, output) => {
  const term = xterm.getTerminal();
  const shellprompt = '$ ';

  term.write(`\r\n${shellprompt}${output}`);
};

const DEFAULT_TERMINAL_ADDONS = ['fit'];

export const Terminal = ({ output = '' }) => {
  const xTermRef = React.useRef();

  React.useEffect(() => {
    runTerminal(xTermRef.current, output);
    return () => xTermRef.current?.componentWillUnmount();
  }, []);

  return <XTerm ref={xTermRef} addons={DEFAULT_TERMINAL_ADDONS} />;
};

Terminal.propTypes = {
  output: PropTypes.string.isRequired,
};
