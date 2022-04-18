import React from 'react';
import ReactDOM from 'react-dom';
import './sandbox/index.css';
import App from './sandbox/App.js'
import { AppProvider } from './sandbox/context.js'

  // ReactDOM.render(<App />, document.getElementById('root'));

  ReactDOM.render(<AppProvider><App /></AppProvider>, document.getElementById('root'));



