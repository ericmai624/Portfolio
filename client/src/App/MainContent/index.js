import React, { Fragment, Component } from "react";
import ScrollReveal from "scrollreveal";

import Intro from "src/App/Intro";
import MySkills from "src/App/MySkills";
import AdditionalProjects from "src/App/AdditionalProjects";
import { Mimoji } from "src/App/Projects";
import { Title, Section } from "./Styled";

class MainContent extends Component {
  componentDidMount() {
    this.initSrollReveal();
  }

  initSrollReveal = () => {
    window.sr = ScrollReveal({
      duration: 600,
      distance: "100px",
      scale: 1,
      viewFactor: 1
    });
    window.sr.reveal(".section-title", { distance: "24px" });
    window.sr.reveal(".featured-project", { viewFactor: 0.6 });
    window.sr.reveal(".additional-projects", { viewFactor: 0.2 });
    window.sr.reveal(".featured-project-links", {
      distance: 0,
      easing: "ease-in"
    });
  };

  render() {
    return (
      <Fragment>
        <Section>
          <Intro />
        </Section>
        <Section headline>
          <Title>MY SKILLS</Title>
        </Section>
        <Section fluid>
          <MySkills />
        </Section>
        <Section headline>
          <Title>FEATURED PROJECT: MIMOJI</Title>
        </Section>
        <Section id="mimoji">
          <Mimoji />
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
