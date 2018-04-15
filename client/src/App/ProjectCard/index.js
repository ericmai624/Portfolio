import React from "react";
import PropTypes from "prop-types";

import {
  CardContainer,
  InnerWrapper,
  RepoName,
  RepoDesc,
  Description,
  GithubLogoContainer,
  GithubImg,
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
        <GithubImg src="/public/assets/Octocat.png" alt="github" />
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
