import React from "react";
import PropTypes from "prop-types";

import Template from "../Template";

const Mimoji = ({ name, summary, description, githubURL, techStacks }) => (
  <Template
    emoji="😺"
    screenshot="/public/assets/mimoji.jpg"
    name={name}
    summary={summary}
    description={description}
    techStacks={techStacks}
    githubURL={githubURL}
  />
);

Mimoji.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  summary: PropTypes.string,
  description: PropTypes.string,
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
  summary: "Plays local videos on TV or browser with stunning graphics",
  description:
    "Mimoji allows the user to select a local computer video with any sizes " +
    "and formats to be played either on the browser or TV via Chromecast. " +
    "Selected video will be transcoded on the fly to browser or Chromecast " +
    "supported formats for high-quality playback. Mimoji is designed to run on " +
    "the user's computer locally in order to read real-time file system changes",
  githubURL: "https://github.com/ericmai624/mimoji-main"
};

export default Mimoji;
