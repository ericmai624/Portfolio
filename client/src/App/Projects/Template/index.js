import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import Info from "./Info";
import {
  Wrapper,
  Container,
  LinksWrapper,
  ProjectLinks,
  DevProcessLink,
  NoStyleLink
} from "../Styled";

class Template extends Component {
  static defaultProps = {
    emoji: null,
    devProcess: false
  };

  static propTypes = {
    emoji: PropTypes.node,
    screenshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubURL: PropTypes.string.isRequired,
    devProcess: PropTypes.bool
  };

  state = {
    displayInfo: false,
    innerWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.getWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWindowWidth);
  }

  getWindowWidth = () => {
    const { innerWidth } = window;
    this.setState({ innerWidth });
  };

  handleHover = () => {
    const { displayInfo } = this.state;
    this.setState({ displayInfo: !displayInfo });
  };

  render() {
    const {
      emoji,
      screenshot,
      name,
      techStacks,
      githubURL,
      devProcess
    } = this.props;
    const { displayInfo, innerWidth } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Container
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            style={{ padding: 0 }}
          >
            {devProcess && innerWidth < 992 ? (
              <NoStyleLink to={`/dev/${name.toLowerCase()}`}>
                <MockChrome imgSrc={screenshot} project={name} />
              </NoStyleLink>
            ) : (
              <MockChrome imgSrc={screenshot} project={name} />
            )}
            <Info
              emoji={emoji}
              name={name}
              techStacks={techStacks}
              innerWidth={innerWidth}
              displayInfo={displayInfo}
              devProcess={devProcess}
            />
          </Container>
        </Wrapper>
        <LinksWrapper>
          {devProcess ? (
            <DevProcessLink to={`/dev/${name.toLowerCase()}`}>
              Dev process
            </DevProcessLink>
          ) : null}
          <ProjectLinks
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </ProjectLinks>
        </LinksWrapper>
      </Fragment>
    );
  }
}

export default Template;
