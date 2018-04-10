import React, { Component } from "react";

import { SiteNav, HeaderLink, Initial } from "./Styled";

class Header extends Component {
  handleClick = () => {};

  render() {
    return (
      <SiteNav className="row justify-content-center">
        <HeaderLink href="/">
          <Initial>E</Initial>
          <b>RIC </b>
          <Initial>M</Initial>
          <b>AI</b>
        </HeaderLink>
      </SiteNav>
    );
  }
}

export default Header;
