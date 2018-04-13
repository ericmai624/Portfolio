import React, { Component, createRef, Fragment } from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";

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
    onClick: PropTypes.func.isRequired,
    displayInfo: PropTypes.bool.isRequired,
    emoji: PropTypes.node,
    screenshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubURL: PropTypes.string.isRequired
  };

  state = {
    displayMessage: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    this.removeScrollListener();
  }

  messageRef = createRef();

  removeScrollListener = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const { displayMessage } = this.state;
    const { top } = this.messageRef.current.getBoundingClientRect();
    const { innerHeight } = window;
    const threshold = innerHeight * 0.88;
    if (top <= threshold && !displayMessage) {
      this.setState({ displayMessage: true }, this.removeScrollListener);
    }
  };

  render() {
    const {
      onClick,
      displayInfo,
      emoji,
      screenshot,
      name,
      summary,
      description,
      techStacks,
      githubURL
    } = this.props;
    const { displayMessage } = this.state;

    return (
      <Fragment>
        <Motion
          defaultStyle={{ opacity: 0, transform: 100 }}
          style={{
            opacity: spring(1, { stiffness: 60 }),
            transform: spring(0, { stiffness: 60, damping: 15 })
          }}
        >
          {({ opacity, transform }) => (
            <Wrapper>
              <Container
                style={{
                  opacity,
                  transform: `translate3d(0, ${transform}%, 0)`,
                  padding: 0
                }}
              >
                <MockChrome
                  imgSrc={screenshot}
                  project={name}
                  displayInfo={displayInfo}
                  onClick={onClick}
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
          )}
        </Motion>
        <Motion
          defaultStyle={{ opacity: 0 }}
          style={{
            opacity: spring(displayMessage ? 1 : 0, {
              stiffness: 40,
              damping: 15
            })
          }}
        >
          {interpolatingStyle => (
            <MessageLine innerRef={this.messageRef} style={interpolatingStyle}>
              <MessageText
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                See it on Github
              </MessageText>
            </MessageLine>
          )}
        </Motion>
      </Fragment>
    );
  }
}

export default Template;
