import React, { Fragment, Component } from "react";

import Intro from "src/App/Intro";
import AdditionalProjects from "src/App/AdditionalProjects";
import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section headline>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <Mimoji />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section headline>
          <Title>PROJECT COMPONENTS</Title>
        </Section>
        <Section fluid>
          <AdditionalProjects />
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
