import React, { Component, Fragment } from "react";
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
    displayInfo: false
  };

  componentDidMount() {}

  componentWillUnmount() {}

  handleHover = () => {
    // const { displayInfo } = this.state;
    // this.setState({ displayInfo: !displayInfo });
  };

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
    const { displayInfo } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <Container
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
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
        <MessageLine>
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
