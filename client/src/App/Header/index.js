import React, { Component } from "react";
import "particles.js";

import {
  HeaderContainer,
  TextContainer,
  HeaderLink,
  Initial,
  Line,
  Role
} from "./Styled";

class Header extends Component {
  componentDidMount() {
    window.particlesJS.load(
      "particles-js",
      "particles/particlesjs-config.json",
      () => {
        const canvas = document.querySelector("#particles-js canvas");
        if (!canvas) return;
        canvas.style.zIndex = 100; // Increase z-index to keep cancas on top of other text to allow interactions
      }
    );
  }

  render() {
    return (
      <HeaderContainer id="particles-js">
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
            <Role>Software Engineer /&nbsp;</Role>
            <Role>Minimalist</Role>
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
      </HeaderContainer>
    );
  }
}

export default Header;
