import React, { Component } from 'react';
import './ToDoItem.css';

export default class ToDoItem extends Component {
  render() {
    const { text, done, important, onDeleted, onImportantClick, onDoneClick } = this.props;

    let liClassName = "list-item" + (done ? ' list-item--done' : '') + (important ? ' list-item--important' : '');
    let markText = important ? 'NOT IMPORTANT' : 'MARK IMPORTANT'

    return (
      <li className={liClassName} tabIndex="0" onClick={onDoneClick}>
        <span className="list-item__text" title={text}>{text}</span>
        <button className="list-item__mark mark" onClick={onImportantClick}>{markText}</button>
        <button className="list-item__del del" onClick={onDeleted}></button>
      </li>
    );
  }
}
