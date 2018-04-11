import React, { Component } from "react";
import "particles.js";

import { HeaderContainer, TextContainer, Intro, Blinky, Role } from "./Styled";

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
          <div className="row justify-content-center">
            <Intro>Hi, I&apos;m Eric Mai.</Intro>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginBottom: "25px" }}
          >
            <Role>Software Engineer /&nbsp;</Role>
            <Role>Minimalist</Role>
          </div>
          <div className="row justify-content-center">
            <span>I&nbsp;</span>
            <span>love&nbsp;</span>
            <span>turning&nbsp;</span>
            <span>ideas&nbsp;</span>
            <span>into&nbsp;</span>
            <Blinky>reality.&nbsp;</Blinky>
          </div>
        </TextContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
