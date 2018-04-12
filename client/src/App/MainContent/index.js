import React, { Fragment, Component } from "react";
import LazyLoad from "react-lazyload";

import Intro from "src/App/Intro";
import { Mimoji, Justag } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  state = {
    innerHeight: window.innerHeight
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ innerHeight: window.innerHeight });
  };

  render() {
    const { innerHeight } = this.state;

    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Title>FEATURED PROJECTS</Title>
        </Section>
        <Section id="mimoji">
          <LazyLoad height="100%" offset={-(innerHeight * 0.3)} overflow once>
            <Mimoji />
          </LazyLoad>
        </Section>
        <Section id="justag">
          <LazyLoad height="100%" offset={-(innerHeight * 0.3)} overflow once>
            <Justag />
          </LazyLoad>
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
