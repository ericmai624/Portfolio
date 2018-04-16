import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Back, SectionTitle, Section, Description } from "./Styled";

const Template = ({
  overview,
  problem,
  stories,
  planning,
  challenges,
  techStacks,
  FontAwesomeIcon
}) => (
  <Container>
    <Back to="/">
      {FontAwesomeIcon ? (
        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
      ) : null}
      &nbsp;Back
    </Back>
    <SectionTitle>Overview</SectionTitle>
    <Section>
      <Description>{overview}</Description>
    </Section>
    <SectionTitle>The problem</SectionTitle>
    <Section>
      <Description>{problem}</Description>
    </Section>
    <SectionTitle>Challenges</SectionTitle>
    <Section>
      <Description>{challenges}</Description>
    </Section>
    <SectionTitle>User stories</SectionTitle>
    <Section>{stories}</Section>
    <SectionTitle>Planning</SectionTitle>
    {planning}
    <SectionTitle>Tech stacks</SectionTitle>
    <Section>{techStacks}</Section>
  </Container>
);

Template.defaultProps = {
  FontAwesomeIcon: null
};

Template.propTypes = {
  overview: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  stories: PropTypes.node.isRequired,
  planning: PropTypes.node.isRequired,
  challenges: PropTypes.string.isRequired,
  techStacks: PropTypes.node.isRequired,
  FontAwesomeIcon: PropTypes.func
};

const mapStateToProps = state => ({
  FontAwesomeIcon: state.fontawesome.FontAwesomeIcon
});

export default connect(mapStateToProps, null)(Template);
