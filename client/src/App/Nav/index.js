import React from "react";
import PropTypes from "prop-types";

import NavContainer from "./Styled";

const Nav = ({ text }) => (
  <NavContainer>
    {text.split("").map((s, i) => (
      <span data-type="special" key={i}>
        {s}
      </span>
    ))}
  </NavContainer>
);

Nav.defaultProps = {
  text: "Software Engineer / Minimalist."
};

Nav.propTypes = {
  text: PropTypes.string
};

export default Nav;
