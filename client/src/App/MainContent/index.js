import React, { Fragment } from "react";

import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section, SectionII } from "./Styled";

const MainContent = () => (
  <Fragment>
    <div className="container">
      <Title>FEATURED</Title>
      <Title>PROJECTS</Title>
    </div>
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
