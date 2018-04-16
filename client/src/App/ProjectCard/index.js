import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  CardContainer,
  InnerWrapper,
  RepoName,
  RepoDesc,
  Description,
  GithubLogoContainer,
  ButtonWrapper,
  Button,
  GithubLink
} from "./Styled";

const ProjectCard = ({ project, FontAwesomeIcon }) => (
  <CardContainer>
    <InnerWrapper>
      <Description>
        <RepoName>{project.name.toUpperCase()}</RepoName>
        <RepoDesc>{project.description}</RepoDesc>
      </Description>
      <GithubLogoContainer>
        {FontAwesomeIcon ? <FontAwesomeIcon icon={["fab", "github"]} /> : null}
      </GithubLogoContainer>
      <ButtonWrapper>
        <Button>
          <GithubLink
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            See it on Github
          </GithubLink>
        </Button>
      </ButtonWrapper>
    </InnerWrapper>
  </CardContainer>
);

ProjectCard.defaultProps = {
  FontAwesomeIcon: null
};

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
  FontAwesomeIcon: PropTypes.func
};

const mapStateToProps = state => ({
  FontAwesomeIcon: state.fontawesome.FontAwesomeIcon
});

export default connect(mapStateToProps, null)(ProjectCard);
