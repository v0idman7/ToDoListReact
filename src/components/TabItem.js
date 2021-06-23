import React, { Component } from 'react';
import './TabItem.css';

export default class TabItem extends Component {
  render() {
    const { name, tab, itemSet } = this.props
    const tabClass = tab ? 'tab__links tab__links--active' : 'tab__links';
    
    return (
      <li className="tab__items">
        <button className={tabClass} onClick={itemSet}>{name}</button>
      </li>
    );
  }
}