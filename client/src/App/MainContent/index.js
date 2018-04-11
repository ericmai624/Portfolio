import React, { Fragment } from "react";

import Mimoji from "src/App/Mimoji";
import Justag from "src/App/Justag";
import { Title, ProjectContainer, Section } from "./Styled";

const MainContent = () => (
  <Fragment>
    <Section className="container">
      <Title>FEATURED</Title>
      <Title>PROJECTS</Title>
      <ProjectContainer className="row align-items-center justify-content-between">
        <Mimoji />
      </ProjectContainer>
    </Section>
    <Section className="container">
      <ProjectContainer className="row align-items-center justify-content-between">
        <Justag />
      </ProjectContainer>
    </Section>
  </Fragment>
);

export default MainContent;
