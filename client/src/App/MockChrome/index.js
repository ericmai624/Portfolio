import React from "react";
import PropTypes from "prop-types";

import {
  ChromeWrapper,
  Content,
  TitleBar,
  Screenshot,
  Buttons
} from "./Styled";

const MockChrome = ({ imgSrc, project }) => (
  <ChromeWrapper>
    <TitleBar>
      <Buttons color="#ed6a5f" />
      <Buttons color="#f6c251" />
      <Buttons color="#61c454" />
    </TitleBar>
    <Content>
      <Screenshot src={imgSrc} alt={`${project} screenshot`} />
    </Content>
  </ChromeWrapper>
);

MockChrome.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  project: PropTypes.string
};

MockChrome.defaultProps = {
  project: ""
};

export default MockChrome;
