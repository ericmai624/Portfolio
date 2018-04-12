import React from "react";
import PropTypes from "prop-types";

import {
  ChromeWrapper,
  Content,
  TitleBar,
  Screenshot,
  Buttons
} from "./Styled";

const MockChrome = ({ imgSrc, project, displayInfo, onClick }) => (
  <ChromeWrapper>
    <TitleBar>
      <Buttons color="#ed6a5f" />
      <Buttons color="#f6c251" />
      <Buttons color="#61c454" />
    </TitleBar>
    <Content>
      <Screenshot
        onClick={onClick}
        displayInfo={displayInfo}
        src={imgSrc}
        alt={`${project} screenshot`}
      />
    </Content>
  </ChromeWrapper>
);

MockChrome.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  project: PropTypes.string,
  displayInfo: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

MockChrome.defaultProps = {
  project: ""
};

export default MockChrome;
