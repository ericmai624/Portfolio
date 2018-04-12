import React, { Fragment } from "react";

import { Mimoji, Justag } from "src/App/Projects";
import { TitleContainer, Title, Section, SectionII } from "./Styled";

const MainContent = () => (
  <Fragment>
    <TitleContainer className="container d-flex justify-content-center">
      <Title>FEATURED PROJECTS</Title>
    </TitleContainer>
    <Section id="mimoji" className="container">
      <Mimoji />
    </Section>
    <Section id="justag" className="container">
      <Justag />
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
