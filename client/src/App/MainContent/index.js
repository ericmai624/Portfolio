import React from "react";
import PropTypes from "prop-types";

import Header from "src/App/Header";
import FeaturedProject from "src/App/FeaturedProject";
import { Container, Title, ProjectContainer } from "./Styled";

const MainContent = ({ display }) => (
  <Container
    style={{
      visibility: display ? "visible" : "hidden",
      zIndex: display ? 1 : -1,
      opacity: display ? 1 : 0,
      height: display ? "auto" : 0
    }}
  >
    <Header />
    <section className="container">
      <Title>FEATURED</Title>
      <Title>PROJECT</Title>
      <ProjectContainer className="row justify-content-between">
        <FeaturedProject />
      </ProjectContainer>
    </section>
  </Container>
);

MainContent.propTypes = {
  display: PropTypes.bool.isRequired
};

export default MainContent;
