import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    const { children } = this.props;
    return <main>{children}</main>;
  }
}

Content.propTypes = {
  children: PropTypes.element.isRequired
};
export default Content;
