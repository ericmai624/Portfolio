import React, { PureComponent } from "react";
import "particles.js";

import CanvasContainer from "./Styled";

class Particles extends PureComponent {
  componentDidMount() {
    const { particlesJS } = window;
    particlesJS.load(
      "particles-js",
      "/public/particles/particlesjs-config.json"
    );
  }

  render() {
    return <CanvasContainer id="particles-js" />;
  }
}

export default Particles;
