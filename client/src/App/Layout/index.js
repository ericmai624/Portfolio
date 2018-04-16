import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Footer from "src/App/Footer";
import Particles from "src/App/Particles";
import Container from "./Styled";

const Layout = ({ children }) => (
  <Fragment>
    <Container>
      {children}
      <Footer />
    </Container>
    <Particles />
  </Fragment>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
