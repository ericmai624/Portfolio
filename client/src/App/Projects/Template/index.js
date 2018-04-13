import React, { Component, createRef, Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import {
  Wrapper,
  Container,
  DetailContainer,
  Description,
  TechList,
  Tech,
  MessageLine,
  MessageText
} from "../Styled";
import { Emoji } from "src/App/Common/Styled";

class Template extends Component {
  static defaultProps = {
    emoji: null
  };

  static propTypes = {
    emoji: PropTypes.node,
    screenshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubURL: PropTypes.string.isRequired
  };

  state = {
    displayChrome: false,
    displayLinks: false,
    displayInfo: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.fadeInChrome);
  }

  componentWillUnmount() {
    this.removeFadeInChromeListener();
    this.removeFadeInLinksListener();
  }

  fadeInChrome = () => {
    const { top } = this.chrome.current.getBoundingClientRect();
    const threshold = window.innerHeight - 100;
    if (top <= threshold) {
      this.setState({ displayChrome: true }, this.removeFadeInChromeListener);
      window.addEventListener("scroll", this.fadeInLinks);
    }
  };

  fadeInLinks = () => {
    const { top } = this.links.current.getBoundingClientRect();
    const threshold = window.innerHeight - 50;
    if (top <= threshold) {
      this.setState({ displayLinks: true }, this.removeFadeInLinksListener);
    }
  };

  handleHover = () => {
    // const { displayInfo } = this.state;
    // this.setState({ displayInfo: !displayInfo });
  };

  removeFadeInChromeListener = () => {
    window.removeEventListener("scroll", this.fadeInChrome);
  };

  removeFadeInLinksListener = () => {
    window.removeEventListener("scroll", this.fadeInLinks);
  };

  chrome = createRef(); // Chrome mockups
  links = createRef(); // parent of links to github or dev process

  render() {
    const {
      emoji,
      screenshot,
      name,
      summary,
      description,
      techStacks,
      githubURL
    } = this.props;
    const { displayChrome, displayLinks, displayInfo } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Container
            innerRef={this.chrome}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            displayChrome={displayChrome}
            style={{ padding: 0 }}
          >
            <MockChrome
              imgSrc={screenshot}
              project={name}
              displayInfo={displayInfo}
            />
            <DetailContainer displayInfo={displayInfo}>
              {emoji ? (
                <h2>
                  {name}
                  &nbsp;<Emoji>{emoji}</Emoji>
                </h2>
              ) : (
                <h2>{name}</h2>
              )}
              <small>{summary}</small>
              <Description>{description}</Description>
              <TechList>
                {techStacks.map(ts => <Tech key={ts}>{ts}</Tech>)}
              </TechList>
            </DetailContainer>
          </Container>
        </Wrapper>
        <MessageLine innerRef={this.links} displayLinks={displayLinks}>
          <MessageText>Dev process</MessageText>
          <MessageText
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </MessageText>
        </MessageLine>
      </Fragment>
    );
  }
}

export default Template;
