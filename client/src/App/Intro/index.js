import React from "react";
import PropTypes from "prop-types";

import { TextContainer, Blinky } from "./Styled";

const Intro = ({ text }) => (
  <TextContainer>
    {text.split(" ").map((txt, i) => <span key={i}>{txt}&nbsp;</span>)}
    <Blinky>reality.&nbsp;</Blinky>
  </TextContainer>
);

Intro.defaultProps = {
  text: "Hello, I'm Eric. I turn ideas into"
};

Intro.propTypes = {
  text: PropTypes.string
};

export default Intro;
