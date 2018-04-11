import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Template from "../Template";

class Mimoji extends PureComponent {
  static defaultProps = {
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
    githubURL: ""
  };

  static propTypes = {
    techStacks: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    githubURL: PropTypes.string
  };

  state = {
    displayInfo: false
  };

  handleClick = () => {
    const { displayInfo } = this.state;
    this.setState({ displayInfo: !displayInfo });
  };

  render() {
    const { name, summary, description, githubURL, techStacks } = this.props;
    const { displayInfo } = this.state;

    return (
      <Template
        emoji="😺"
        screenshot="/assets/mimoji.jpg"
        name={name}
        summary={summary}
        description={description}
        techStacks={techStacks}
        githubURL={githubURL}
        displayInfo={displayInfo}
        onClick={this.handleClick}
      />
    );
  }
}

export default Mimoji;
