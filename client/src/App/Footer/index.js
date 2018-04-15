import React, { PureComponent } from "react";

import {
  FooterContainer,
  Copyright,
  SocialMedia,
  SocialMediaLink,
  Heart
} from "./Styled";

class Footer extends PureComponent {
  state = {
    github: null,
    linkedin: null,
    email: null,
    heart: null
  };

  componentDidMount() {
    this.dynamicImport();
  }

  dynamicImport = async () => {
    const [
      fontawesome,
      { default: FontAwesomeIcon },
      { default: faGithub },
      { default: faLinkedinIn },
      { default: faEnvelope },
      { default: faHeart }
    ] = await Promise.all([
      import(/* webpackChunkName: "fontaweome" */ "@fortawesome/fontawesome"),
      import(/* webpackChunkName: "react-fontawesome" */ "@fortawesome/react-fontawesome"),
      import(/* webpackChunkName: "fa-github" */ "@fortawesome/fontawesome-free-brands/faGithub"),
      import(/* webpackChunkName: "fa-linkedin" */ "@fortawesome/fontawesome-free-brands/faLinkedinIn"),
      import(/* webpackChunkName: "fa-at" */ "@fortawesome/fontawesome-free-solid/faAt"),
      import(/* webpackChunkName: "fa-heart" */ "@fortawesome/fontawesome-free-solid/faHeart")
    ]);

    fontawesome.library.add(faGithub, faLinkedinIn, faEnvelope, faHeart);

    this.setState({
      github: <FontAwesomeIcon icon={["fab", "github"]} />,
      linkedin: <FontAwesomeIcon icon={["fab", "linkedin-in"]} />,
      email: <FontAwesomeIcon icon={["fas", "at"]} />,
      heart: <FontAwesomeIcon icon={["fas", "heart"]} />
    });
  };

  render() {
    const { github, linkedin, email, heart } = this.state;

    return (
      <FooterContainer>
        <SocialMedia>
          <SocialMediaLink href="mailto:ericmak624@gmail.com">
            {email}
          </SocialMediaLink>
          <SocialMediaLink
            href="https://github.com/ericmai624"
            rel="noopener noreferrer"
            target="_blank"
          >
            {github}
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/in/eric-mai"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </SocialMediaLink>
        </SocialMedia>
        <Copyright>
          <span>© Hand made with&nbsp;</span>
          <Heart>{heart}</Heart>
          <span>&nbsp;and React + Node.js</span>
        </Copyright>
      </FooterContainer>
    );
  }
}

export default Footer;
