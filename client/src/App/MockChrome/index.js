import React from "react";
import PropTypes from "prop-types";

import { Content, Title, Screenshot, MockBtn } from "./Styled";

const MockChrome = ({ imgSrc, project }) => (
  <div className="col-12">
    <Title className="row">
      <MockBtn color="#ed6a5f" />
      <MockBtn color="#f6c251" />
      <MockBtn color="#61c454" />
    </Title>
    <Content className="row">
      <Screenshot src={imgSrc} alt={`${project} screenshot`} />
    </Content>
  </div>
);

MockChrome.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  project: PropTypes.string
};

MockChrome.defaultProps = {
  project: ""
};

export default MockChrome;
