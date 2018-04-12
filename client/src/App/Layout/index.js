import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Particles from "src/App/Particles";
import Container from "./Styled";

const Layout = ({ children }) => (
  <TransitionGroup component={null} appear>
    <CSSTransition timeout={1000} classNames="main-content">
      <Fragment>
        <Container id="layout">{children}</Container>
        <Particles />
      </Fragment>
    </CSSTransition>
  </TransitionGroup>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
