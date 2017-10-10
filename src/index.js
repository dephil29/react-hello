import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return <span>Ohai</span>
}

function World() {
    return <span>World!</span>
}

function HelloWorld() {
  return (
    <div>
      <Hello /> <World />
      <br />
      <SubmitButton />
      <br />
      <ValidIndicator />
      <br />
      <ValidIndicatorBoolean />
    </div>

  );
}

function ValidIndicator() {
  var isValid = true;
  return (
    <span>{isValid ? 'valid' : 'not valid'}</span>
  )
}

function ValidIndicatorBoolean() {
  var isValid = false;
  return (
    <span>
      {/* Here is a comment. Shhhhh! Don't let anyone know. */}
      {isValid && 'valid'}
      {!isValid && 'not valid'}
    </span>
  )
}

function SubmitButton() {
  var buttonLabel = 'Submit';
  return <button>Submit!</button>
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
)
