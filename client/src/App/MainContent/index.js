import React, { Fragment, Component } from "react";
import LazyLoad from "react-lazyload";

import Intro from "src/App/Intro";
import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const lazyloadOffset = window.innerHeight * -0.2;

    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section style={{ height: "200px", marginBottom: 0 }}>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <LazyLoad height="100%" offset={lazyloadOffset}>
            <Mimoji />
          </LazyLoad>
        </Section>
        <Section id="justag">
          <LazyLoad height="100%" offset={lazyloadOffset}>
            <Justag />
          </LazyLoad>
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
