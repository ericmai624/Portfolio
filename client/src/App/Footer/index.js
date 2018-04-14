import React, { PureComponent } from "react";

import { FooterContainer, Copyright, SocialMedia, Heart } from "./Styled";

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
      import("@fortawesome/fontawesome"),
      import("@fortawesome/react-fontawesome"),
      import("@fortawesome/fontawesome-free-brands/faGithubSquare"),
      import("@fortawesome/fontawesome-free-brands/faLinkedin"),
      import("@fortawesome/fontawesome-free-solid/faEnvelope"),
      import("@fortawesome/fontawesome-free-solid/faHeart")
    ]);

    fontawesome.library.add(faGithub, faLinkedinIn, faEnvelope, faHeart);

    this.setState({
      github: <FontAwesomeIcon icon={["fab", "github-square"]} />,
      linkedin: <FontAwesomeIcon icon={["fab", "linkedin"]} />,
      email: <FontAwesomeIcon icon={["fas", "envelope"]} />,
      heart: <FontAwesomeIcon icon={["fas", "heart"]} />
    });
  };

  render() {
    const { github, linkedin, email, heart } = this.state;

    return (
      <FooterContainer>
        <SocialMedia>
          {email}
          {github}
          {linkedin}
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
