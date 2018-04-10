import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavContainer from './Styled';

const Nav = ({ isVisible, text }) => (
  <NavContainer style={{ display: isVisible ? 'block' : 'none' }}>
    {text.split('').map((s, i) => <span data-type='special' key={i}>{s}</span>)}
  </NavContainer>
);

Nav.defaultProps = {
  text: 'Software Engineer / Minimalist.'
};

Nav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string
};

const mapStateToProps = state => ({
  isVisible: !state.app.isBlackBg
});

export default connect(mapStateToProps)(Nav);
