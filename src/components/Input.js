import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {
  state = {
    text: ''
  };

  inputChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  };

  render() {
    return (
      <form className="input" onSubmit={this.formSubmit}>
        <label className="input__label">New Task
          <textarea className="input__textarea" onChange={this.inputChange} value={this.state.text}></textarea>
        </label>
        <button className="input__button">ADD</button>
      </form>
    );
  }
}
