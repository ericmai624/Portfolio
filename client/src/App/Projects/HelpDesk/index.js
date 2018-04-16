import React from "react";
import PropTypes from "prop-types";

import Template from "../Template";

const HelpDesk = ({ name, githubURL, techStacks }) => (
  <Template
    screenshot="/public/assets/hr_home.jpg"
    name={name}
    techStacks={techStacks}
    githubURL={githubURL}
  />
);

HelpDesk.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  githubURL: PropTypes.string
};

HelpDesk.defaultProps = {
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
  name: "Help_Desk_v2.0",
  githubURL: "https://github.com/ericmai624/mysolution"
};

export default HelpDesk;
