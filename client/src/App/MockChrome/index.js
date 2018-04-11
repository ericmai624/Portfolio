import React from "react";
import PropTypes from "prop-types";

import { Content, Title, Screenshot, MockBtn } from "./Styled";

const MockChrome = ({ imgSrc, project, displayInfo, onClick }) => (
  <div className="col">
    <Title className="row">
      <MockBtn color="#ed6a5f" />
      <MockBtn color="#f6c251" />
      <MockBtn color="#61c454" />
    </Title>
    <Content className="row">
      <Screenshot
        onClick={onClick}
        style={{
          filter: displayInfo ? "grayscale(80%)" : "none",
          cursor: displayInfo ? "auto" : "pointer"
        }}
        src={imgSrc}
        alt={`${project} screenshot`}
      />
    </Content>
  </div>
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
