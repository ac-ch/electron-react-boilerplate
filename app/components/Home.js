import React, { PropTypes } from 'react';

export function Button(props) {
  return (
    <button
      type="button"
      className="button is-medium is-dark is-outlined margin-sm"
      onClick={props.onContinue} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onContinue: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default function Home(props) {
  return (
    <div className="home-container">
      <h1 className="home-header">Electron React App</h1>
      <Button onContinue={props.toCounter}>Continue to Counter App</Button>
      <Button onContinue={props.toTodo}>Continue to Todo App</Button>
    </div>
  );
}

Home.propTypes = {
  toCounter: PropTypes.func.isRequired,
  toTodo: PropTypes.func.isRequired,
};
