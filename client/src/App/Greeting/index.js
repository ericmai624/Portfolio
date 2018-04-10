import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Msg from "src/App/Msg";
import Nav from "src/App/Nav";
import More from "src/App/More";
import { Landing, MsgContainer } from "./Styled";

const Greeting = ({ display }) => (
  <Fragment>
    {display ? (
      <Landing>
        <MsgContainer id="greeting">
          <Msg text={"Hi, I'm Eric."} />
        </MsgContainer>
        <Nav />
        <More text="MORE" />
      </Landing>
    ) : null}
  </Fragment>
);

Greeting.propTypes = {
  display: PropTypes.bool.isRequired
};

export default Greeting;
