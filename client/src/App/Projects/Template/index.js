import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import {
  Wrapper,
  Container,
  DetailContainer,
  ProjectName,
  TechList,
  Tech,
  LinksWrapper,
  ProjectLinks
} from "../Styled";
import { Emoji } from "src/App/Common/Styled";

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
    displayInfo: false
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
                <ProjectName displayInfo={displayInfo}>
                  {name}
                  &nbsp;<Emoji>{emoji}</Emoji>
                </ProjectName>
              ) : (
                <ProjectName displayInfo={displayInfo}>{name}</ProjectName>
              )}
              <TechList>
                {techStacks.map(ts => (
                  <Tech key={ts} displayInfo={displayInfo}>
                    {ts}
                  </Tech>
                ))}
              </TechList>
            </DetailContainer>
          </Container>
        </Wrapper>
        <LinksWrapper>
          {devProcess ? <ProjectLinks>Dev process</ProjectLinks> : null}
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
