import React, { Fragment, Component } from "react";

import Intro from "src/App/Intro";
import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <Mimoji />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
