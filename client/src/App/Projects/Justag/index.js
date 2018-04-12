import React, { Component } from "react";
import PropTypes from "prop-types";

import Template from "../Template";

class Justag extends Component {
  static defaultProps = {
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
    summary: "Just another movie rating app",
    description:
      "Justag is a simple application built on React and Node.js to fetch " +
      "and scrape movie ratings from multiple sources.Development focused " +
      "on concurrency and code reusability.",
    githubURL: "https://github.com/ericmai624/justag"
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
        screenshot="/assets/jt_macbook.jpg"
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

export default Justag;
