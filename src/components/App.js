import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import Header from './Header';
import Input from './Input';
import ToDo from './ToDo';
import {saveState} from '../scripts/setLS'
import {getState} from '../scripts/setLS'

export default class App extends Component {


  constructor(){
    super();
    this.state = getState();
  }

  componentDidUpdate() {
    saveState(this.state);
  }

  // state = {
  //   toDoList: [
  //     {
  //       id : 1,
  //       text: 'Что бы мне поделать только бы не почитать',
  //       done: false,
  //       important: false,
  //     },
  //     {
  //       id : 2,
  //       text: 'Бар в большом городе',
  //       done: true,
  //       important: false,
  //     },
  //     {
  //       id : 3,
  //       text: 'Что было дальше',
  //       done: false,
  //       important: true,
  //     },
  //     {
  //       id : 4,
  //       text: 'Громкий вопрос',
  //       done: true,
  //       important: true,
  //     }
  //   ]
  // };

  onAdd = (addText) => {
    this.setState(({toDoList}) => {
      const item = {
        id: nanoid(),
        text: addText,
        done: false,
        important: false,
      };
      const toDo = toDoList.slice();
      toDo.push(item);

      return {
        toDoList: toDo
      };
    });
  };

  deleteItem = (id, e) => {
    e.stopPropagation();
    this.setState(({toDoList}) => {
      const index = toDoList.findIndex((el) => el.id === id);
      const toDo = toDoList.slice();
      toDo.splice(index, 1);

      return {
        toDoList: toDo
      };
    });
  };

  onImportantClick = (id, e) => {
    e.stopPropagation();
    this.setState(({toDoList}) => {
      const index = toDoList.findIndex((el) => el.id === id);
      const toDoItem = {...toDoList[index], important: !toDoList[index].important};
      const toDo = [...toDoList.slice(0, index), toDoItem, ...toDoList.slice(index + 1)];

      return {
        toDoList: toDo
      };
    });
  };

  onDoneClick = (id) => {
    this.setState(({toDoList}) => {
      const index = toDoList.findIndex((el) => el.id === id);
      const toDoItem = {...toDoList[index], done: !toDoList[index].done};
      const toDo = [...toDoList.slice(0, index), toDoItem, ...toDoList.slice(index + 1)];

      return {
        toDoList: toDo
      };
    });
  };

  search = (search) => {
    this.setState({search});
  }

  searchFilter(toDoList, search) {
    if (search.length === 0) {
      return toDoList;
    }
    return toDoList.filter((item) => { return item.text.toLowerCase().includes(search) === true; });
  }

  tabFilter(toDoList, tab) {
    switch (tab) {
      case 1: return toDoList;
      case 2: return toDoList.filter((item) => { return item.done === false; });
      case 3: return toDoList.filter((item) => { return item.done === true; });
      default: return 0;
    }
  }

  itemSet = (tab) => {
    this.setState({tab})
  }

  render() {
    const {toDoList, search, tab} = this.state;
    let toDoOut = this.searchFilter(toDoList, search);
    toDoOut = this.tabFilter(toDoOut, tab);

    return (
      <div>
        <Header search={this.search}
          itemSet={this.itemSet}
          tab={tab} />
        <Input onAdd={this.onAdd}/>
        <ToDo toDoList={toDoOut}
          onDeleted={this.deleteItem}
          onImportantClick={this.onImportantClick}
          onDoneClick={this.onDoneClick} />
      </div>
    );
  }
}
