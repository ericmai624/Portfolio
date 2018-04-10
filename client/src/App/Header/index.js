import React, { Component } from "react";
import "particles.js";

import { SiteNav, TextContainer, HeaderLink, Initial, Line } from "./Styled";

class Header extends Component {
  componentDidMount() {
    window.particlesJS.load(
      "particles-js",
      "particles/particlesjs-config.json"
    );
  }

  render() {
    return (
      <SiteNav id="particles-js">
        <TextContainer className="container">
          <Line className="row align-items-end justify-content-center fw-500">
            <HeaderLink href="/">
              <Initial>H</Initial>
              <span>I,&nbsp;</span>
              <Initial>I</Initial>
              <span>&apos;M </span>
              <Initial>E</Initial>
              <span>RIC.</span>
            </HeaderLink>
          </Line>
          <Line
            className="row justify-content-center"
            style={{ marginBottom: "25px" }}
          >
            <span className="small">Software Engineer / Minimalist</span>
          </Line>
          <Line className="row justify-content-center">
            <span>I&nbsp;</span>
            <span>love&nbsp;</span>
            <span>turning&nbsp;</span>
            <span>ideas&nbsp;</span>
            <span>into&nbsp;</span>
            <span id="blinky">reality.&nbsp;</span>
          </Line>
        </TextContainer>
      </SiteNav>
    );
  }
}

export default Header;
