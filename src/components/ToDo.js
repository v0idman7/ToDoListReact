import React, { Component } from 'react';
import './ToDo.css';
import ToDoItem from './ToDoItem';

export default class ToDo extends Component {
  render() {
    const {toDoList, onDeleted, onImportantClick, onDoneClick} = this.props;

    return (
      <section className="toDo">
        <ul className="toDo__list">
          { toDoList ?
            toDoList.map(item => (
              <ToDoItem key={item.id}
                        text={item.text}
                        done={item.done} 
                        important={item.important} 
                        onDeleted={(e) => onDeleted(item.id, e)}
                        onImportantClick={(e) => onImportantClick(item.id, e)}
                        onDoneClick={() => onDoneClick(item.id)} />
            ))
            :
            ''
          }
        </ul>
      </section>
    );
  }
}
