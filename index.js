import React from 'react';
import ReactDOM from 'react-dom';

//create hellowrold text to web
function helloWorld(){
  return <h1>Hello World</h1>
}

ReactDOM.render(
  helloWorld,
  document.getElementById('app')
);