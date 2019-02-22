import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from '../../images/logo.svg';

class Header extends Component {
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
