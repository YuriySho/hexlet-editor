import React from 'react';
import XTerm from 'react-xterm';
import 'xterm/css/xterm.css';

function runFakeTerminal(xterm) {
  const term = xterm.getTerminal();
  const shellprompt = '$ ';

  term.write(`\r\n${shellprompt}`);
}

const DEFAULT_TERMINAL_ADDONS = ['fit'];

export const Terminal = () => {
  const xTermRef = React.useRef();

  React.useEffect(() => {
    runFakeTerminal(xTermRef.current);
    return () => xTermRef.current?.componentWillUnmount();
  }, []);

  return <XTerm ref={xTermRef} addons={DEFAULT_TERMINAL_ADDONS} />;
};
