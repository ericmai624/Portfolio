import React, { Fragment, Component } from "react";
import ScrollReveal from "scrollreveal";

import Intro from "src/App/Intro";
import MySkills from "src/App/MySkills";
import AdditionalProjects from "src/App/AdditionalProjects";
import { Mimoji, Justag, HelpDesk } from "src/App/Projects";
import { Title, Section, TitleWrapper } from "./Styled";

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
    window.sr.reveal("#skills");
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
        <TitleWrapper>
          <Title>MY SKILLS</Title>
        </TitleWrapper>
        <Section fluid id="skills">
          <MySkills />
        </Section>
        <TitleWrapper>
          <Title>FEATURED PROJECTS</Title>
        </TitleWrapper>
        <Section id="mimoji">
          <Mimoji />
        </Section>
        <Section id="justag">
          <Justag />
        </Section>
        <Section id="help-desk">
          <HelpDesk />
        </Section>
        <TitleWrapper>
          <Title>OTHER PROJECTS</Title>
        </TitleWrapper>
        <Section fluid>
          <AdditionalProjects />
        </Section>
      </Fragment>
    );
  }
}

export default MainContent;
