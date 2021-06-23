import React, { Component } from 'react';
import './HeaderInput.css';
import logo from '../images/content/Logo.svg';

export default class HeaderInput extends Component {
  constructor(props) {
    super(props);
    this.props.search('');
  }

  state = {
    search: ''
  };

  inputChange = (e) => {
    const search = e.target.value.toLowerCase()
    this.setState({search});
    this.props.search(search);
  };

  render() {
    return (
      <div className="header__top">
        <img className="header__logo" src={logo} alt="Senla Logo" />
        <div className="header__search-wrapper">
          <input className="header__search-input" 
            type="text" 
            placeholder="Search task for to do" 
            onChange={this.inputChange} 
            value={this.state.search} />
        </div>
      </div>
    );
  }
}
