import React, { Fragment, Component } from "react";

import Intro from "src/App/Intro";
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
        <Section style={{ height: "200px", marginBottom: 0 }}>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <Mimoji />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
