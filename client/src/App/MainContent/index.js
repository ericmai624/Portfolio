import React, { Fragment, Component } from "react";
import LazyLoad from "react-lazyload";

import Intro from "src/App/Intro";
import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  state = {
    lazyloadOffset: window.innerHeight * -0.25
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ lazyloadOffset: window.innerHeight * -0.25 });
  };

  render() {
    const { lazyloadOffset } = this.state;

    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <LazyLoad height="100%" offset={lazyloadOffset} once>
            <Mimoji />
          </LazyLoad>
        </Section>
        <Section id="justag">
          <LazyLoad height="100%" offset={lazyloadOffset} once>
            <Justag />
          </LazyLoad>
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
