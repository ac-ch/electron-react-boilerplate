import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleToCounter = (e) => {
    e.preventDefault();

    hashHistory.push('counter');
  }

  handleToTodo = (e) => {
    e.preventDefault();

    hashHistory.push('todo');
  }

  styles = {
    button: { margin: '10px' },
  };

  render() {
    return (
      <div className="home-container app-flex">
        <h1 className="title is-1">Electron React App</h1>
        <RaisedButton label="Counter App" style={this.styles.button} onClick={this.handleToCounter} />
        <RaisedButton label="Todo App" style={this.styles.button} onClick={this.handleToTodo} />
      </div>
    );
  }
}
