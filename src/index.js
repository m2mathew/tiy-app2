import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import './index.css';

ReactDOM.render(
  <Hello age={28} name={"Donovan"} />,
  document.getElementById('root')
);
