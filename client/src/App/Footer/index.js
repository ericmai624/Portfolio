import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  FooterContainer,
  Copyright,
  SocialMedia,
  SocialMediaLink,
  Heart
} from "./Styled";

const Footer = ({ FontAwesomeIcon }) => {
  if (!FontAwesomeIcon) {
    return (
      <FooterContainer>
        <Copyright>Hand made with love and React + Node.js</Copyright>
      </FooterContainer>
    );
  }

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaLink href="mailto:ericmak624@gmail.com">
          <FontAwesomeIcon icon={["fas", "at"]} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://github.com/ericmai624"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.linkedin.com/in/eric-mai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </SocialMediaLink>
      </SocialMedia>
      <Copyright>
        <span>© Hand made with&nbsp;</span>
        <Heart>
          <FontAwesomeIcon icon={["fas", "heart"]} />
        </Heart>
        <span>&nbsp;and React + Node.js</span>
      </Copyright>
    </FooterContainer>
  );
};

Footer.propTypes = {
  FontAwesomeIcon: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  FontAwesomeIcon: state.fontawesome.FontAwesomeIcon
});

export default connect(mapStateToProps, null)(Footer);
