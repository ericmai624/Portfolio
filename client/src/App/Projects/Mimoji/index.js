import React from "react";
import PropTypes from "prop-types";

import Template from "../Template";

const Mimoji = ({ name, githubURL, techStacks }) => (
  <Template
    emoji="😺"
    screenshot="/public/assets/mimoji.jpg"
    name={name}
    techStacks={techStacks}
    githubURL={githubURL}
    devProcess
  />
);

Mimoji.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  githubURL: PropTypes.string
};

Mimoji.defaultProps = {
  techStacks: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "FFmpeg"
  ],
  name: "Mimoji",
  githubURL: "https://github.com/ericmai624/mimoji-main"
};

export default Mimoji;
