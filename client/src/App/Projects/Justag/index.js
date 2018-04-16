import React from "react";
import PropTypes from "prop-types";

import Template from "../Template";

const Justag = ({ name, githubURL, techStacks }) => (
  <Template
    screenshot="/public/assets/jt_macbook.jpg"
    name={name}
    techStacks={techStacks}
    githubURL={githubURL}
    devProcess
  />
);

Justag.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  githubURL: PropTypes.string
};

Justag.defaultProps = {
  techStacks: [
    "JavaScript",
    "Angular",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  name: "Justag",
  githubURL: "https://github.com/ericmai624/justag"
};

export default Justag;
