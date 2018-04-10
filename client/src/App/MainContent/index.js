import React, { Fragment } from "react";

import FeaturedProject from "src/App/FeaturedProject";
import { Title, ProjectContainer } from "./Styled";

const MainContent = () => (
  <Fragment>
    <section className="container">
      <Title>FEATURED</Title>
      <Title>PROJECTS</Title>
      <ProjectContainer className="row justify-content-between">
        <FeaturedProject />
      </ProjectContainer>
      <ProjectContainer className="row justify-content-between">
        another project
      </ProjectContainer>
    </section>
  </Fragment>
);

export default MainContent;
