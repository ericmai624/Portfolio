import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/App/Header';
import Container from './Styled';

const MainContent = ({ display }) => (
  <Container
    className='container'
    style={{
      visibility: display ? 'visible' : 'hidden',
      zIndex: display ? 1 : -1,
      opacity: display ? 1 : 0
    }}
  >
    <Header />
  </Container>
);

MainContent.propTypes = {
  display: PropTypes.bool.isRequired
};

export default MainContent;
