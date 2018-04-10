import React from "react";
import PropTypes from "prop-types";

import Header from "src/App/Header";
import Container from "./Styled";

const Layout = ({ children, display }) => (
  <Container
    style={{
      visibility: display ? "visible" : "hidden",
      zIndex: display ? 1 : -1,
      opacity: display ? 1 : 0,
      height: display ? "auto" : 0
    }}
  >
    <Header />
    {children}
  </Container>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.element,
  display: PropTypes.bool.isRequired
};

export default Layout;
