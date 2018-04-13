import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";

import Particles from "src/App/Particles";
import Container from "./Styled";

const Layout = ({ children }) => (
  <Motion
    defaultStyle={{ opacity: 0 }}
    style={{ opacity: spring(1, { stiffness: 40, damping: 14 }) }}
  >
    {({ opacity }) => (
      <Fragment>
        <Container id="layout" style={{ opacity }}>
          {children}
        </Container>
        <Particles />
      </Fragment>
    )}
  </Motion>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
