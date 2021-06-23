import React, { Component } from 'react';
import './Header.css';
import HeaderInput from './HeaderInput';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    const { search, itemSet, tab } = this.props;
    return (
      <div className="header">
        <HeaderInput search={search}/>
        <Nav itemSet={itemSet} tab={tab} />
      </div>
    );
  }
}
