import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavLink from 'src/App/NavLink';
import NavContainer from './Styled';

const Nav = ({ isVisible, links }) => (
  <NavContainer isVisible={isVisible}>
    {links.map(link => (
      <NavLink key={link} text={link} />
    ))}
  </NavContainer>
);

Nav.defaultProps = {
  links: ['Projects', 'Resume', 'Contact']
};

Nav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  isVisible: !state.app.isBlackBg
});

export default connect(mapStateToProps)(Nav);
