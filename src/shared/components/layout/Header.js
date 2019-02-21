import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from '../../images/logo.svg';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  };

  render() {
    const {
      title = 'Welcome to React',
      url = 'http://localhost:3000'
    } = this.props;

    return (
      <header className="App-header">
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;
