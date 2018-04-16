import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { Container } from "./Styled";

class DevProcess extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {};

  componentDidMount() {}

  render() {
    const { match, location, history } = this.props;

    console.log(match, location);
    return <Container>dev</Container>;
  }
}

export default withRouter(DevProcess);
