import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import {
  Container,
  DetailContainer,
  Description,
  TechList,
  Tech,
  SeeItOnGithub
} from "../Styled";
import { StyledLink, Emoji } from "src/App/Common/Styled";

const Template = ({
  onClick,
  displayInfo,
  emoji,
  screenshot,
  name,
  summary,
  description,
  techStacks,
  githubURL
}) => (
  <Fragment>
    <Container>
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
        <TechList>{techStacks.map(ts => <Tech key={ts}>{ts}</Tech>)}</TechList>
      </DetailContainer>
    </Container>
    <SeeItOnGithub className="row">
      <StyledLink href={githubURL} target="_blank" rel="noopener noreferrer">
        See it on Github
      </StyledLink>
    </SeeItOnGithub>
  </Fragment>
);

Template.defaultProps = {
  emoji: null
};

Template.propTypes = {
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

export default Template;
