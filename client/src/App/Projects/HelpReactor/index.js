import React from "react";
import PropTypes from "prop-types";

import Template from "../Template";

const HelpReactor = ({ name, githubURL, techStacks }) => (
  <Template
    screenshot="/public/assets/hr_home.jpg"
    name={name}
    techStacks={techStacks}
    githubURL={githubURL}
    devProcess
  />
);

HelpReactor.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  githubURL: PropTypes.string
};

HelpReactor.defaultProps = {
  techStacks: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "Socket.io",
    "PostgreSQL"
  ],
  name: "Help Reactor",
  githubURL: "https://github.com/ericmai624/mysolution"
};

export default HelpReactor;
