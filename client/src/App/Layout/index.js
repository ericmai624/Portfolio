import React from "react";
import PropTypes from "prop-types";

// import Particles from "src/App/Particles";
import Container from "./Styled";

const Layout = ({ children, display }) => (
  <Container
    style={{
      visibility: display ? "visible" : "hidden",
      zIndex: display ? 50 : -1,
      opacity: display ? 1 : 0,
      height: display ? "100%" : 0
    }}
  >
    {children}
    {/* <Particles /> */}
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
