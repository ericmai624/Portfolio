import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Msg from "src/App/Msg";
import Synopsis from "src/App/Synopsis";
import More from "src/App/More";
import { Landing, MsgContainer } from "./Styled";

const Greeting = ({ display }) => (
  <Fragment>
    {display ? (
      <Landing>
        <MsgContainer id="greeting">
          <Msg text={"Hi, I'm Eric."} />
        </MsgContainer>
        <Synopsis />
        <More text="MORE" />
      </Landing>
    ) : null}
  </Fragment>
);

Greeting.propTypes = {
  display: PropTypes.bool.isRequired
};

export default Greeting;
