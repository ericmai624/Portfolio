import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MockChrome from "src/App/MockChrome";
import {
  Wrapper,
  Container,
  DescrWrapper,
  ProjectName,
  TechStacks,
  Tech,
  LinksWrapper,
  ProjectLinks,
  DevProcessLink
} from "../Styled";
import { Emoji } from "src/App/Common/Styled";

class Template extends Component {
  static defaultProps = {
    emoji: null,
    devProcess: false,
    FontAwesomeIcon: null
  };

  static propTypes = {
    emoji: PropTypes.node,
    screenshot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubURL: PropTypes.string.isRequired,
    devProcess: PropTypes.bool,
    FontAwesomeIcon: PropTypes.func
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
      devProcess,
      FontAwesomeIcon
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
            <Link to={`/dev/${name.toLowerCase()}`}>
              <DescrWrapper displayInfo={displayInfo}>
                {emoji ? (
                  <ProjectName displayInfo={displayInfo}>
                    {name.replace(/_/g, " ")}
                    &nbsp;<Emoji>{emoji}</Emoji>
                  </ProjectName>
                ) : (
                  <ProjectName displayInfo={displayInfo}>
                    {name.replace(/_/g, " ")}
                  </ProjectName>
                )}
                {FontAwesomeIcon ? (
                  <TechStacks displayInfo={displayInfo}>
                    Made with&nbsp;<FontAwesomeIcon icon={["fas", "heart"]} />&nbsp;and
                  </TechStacks>
                ) : null}
                <TechStacks displayInfo={displayInfo}>
                  {techStacks.map(ts => <Tech key={ts}>{ts}</Tech>)}
                </TechStacks>
              </DescrWrapper>
            </Link>
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

const mapStateToProps = state => ({
  FontAwesomeIcon: state.fontawesome.FontAwesomeIcon
});

export default connect(mapStateToProps, null)(Template);
