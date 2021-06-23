import React, { Component } from 'react';
import './Nav.css';
import TabItem from './TabItem';

export default class Nav extends Component {
  render() {
    const { itemSet, tab } = this.props;

    return (
      <nav className="nav">
        <ul className="tab">
          <TabItem name="All" tab={tab === 1 ? true : false} itemSet={() => itemSet(1)}/>
          <TabItem name="Active" tab={tab === 2 ? true : false} itemSet={() => itemSet(2)}/>
          <TabItem name="Done" tab={tab === 3 ? true : false} itemSet={() => itemSet(3)}/>
        </ul>
      </nav>
    );
  }
}
