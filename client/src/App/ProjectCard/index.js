import React from "react";
import PropTypes from "prop-types";

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

const ProjectCard = ({ project }) => (
  <CardContainer>
    <InnerWrapper>
      <Description>
        <RepoName>{project.name.toUpperCase()}</RepoName>
        <RepoDesc>{project.description}</RepoDesc>
      </Description>
      <GithubLogoContainer>
        <img src="/assets/Octocat.png" alt="github" width="90" />
      </GithubLogoContainer>
      <ButtonWrapper>
        <Button>
          <GithubLink
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </GithubLink>
        </Button>
      </ButtonWrapper>
    </InnerWrapper>
  </CardContainer>
);

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired
};

export default ProjectCard;
