import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return <footer>&copy; Task Mgr {new Date().getFullYear()}</footer>;
  }
}
export default Footer;
