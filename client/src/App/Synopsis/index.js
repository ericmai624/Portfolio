import React from "react";
import PropTypes from "prop-types";

import Container from "./Styled";

const Synopsis = ({ text }) => (
  <Container>
    {text.split("").map((s, i) => (
      <span data-type="special" key={i}>
        {s}
      </span>
    ))}
  </Container>
);

Synopsis.defaultProps = {
  text: "Software Engineer based in San Francisco."
};

Synopsis.propTypes = {
  text: PropTypes.string
};

export default Synopsis;
