import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StyledLink from './Styled';

class NavLink extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  componentWillUnmount() {
    this.clearTransform();
  }

  handleMouseEnter = () => {

  }

  handleMouseLeave = () => {
    this.clearTransform();
  }

  clearTransform = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  render() {
    const { text } = this.props;

    return (
      <StyledLink
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {text}
      </StyledLink>
    );
  }
}

export default NavLink;
