import React, { Fragment } from "react";

import Mimoji from "src/App/Mimoji";
import Justag from "src/App/Justag";
import { Title, ProjectContainer, Section, SectionII } from "./Styled";

const MainContent = () => (
  <Fragment>
    <Section className="container">
      <Title>FEATURED</Title>
      <Title>PROJECTS</Title>
      <ProjectContainer className="row align-items-center justify-content-between">
        <Mimoji />
      </ProjectContainer>
      <ProjectContainer className="row align-items-center justify-content-between">
        <Justag />
      </ProjectContainer>
    </Section>
    <SectionII>
      <div className="container">
        <Title>PROJECT</Title>
        <Title>COMPONENTS</Title>
      </div>
    </SectionII>
  </Fragment>
);

export default MainContent;
