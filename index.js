import React from 'react';
import ReactDOM from 'react-dom';

function helloWorld(){
  return <h1>Hello World</h1>
}

ReactDOM.render(
  helloWorld,
  document.getElementById('app')
);