import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Greeting from "./Greeting";
import Layout from "./Layout";
import MainContent from "./MainContent";
import ContentWrapper from "./Styled";

import { appType } from "src/types";

class App extends Component {
  static propTypes = {
    app: PropTypes.shape(appType).isRequired
  };

  state = {};

  render() {
    const {
      app: { fontColor: color, isBlackBg, displayGreeting }
    } = this.props;

    return (
      <ContentWrapper
        id="main-content-wrapper"
        style={{
          color,
          backgroundPosition: isBlackBg ? "right bottom" : "left bottom"
        }}
      >
        <Greeting display={displayGreeting} />
        <Layout display={!displayGreeting}>
          <MainContent />
        </Layout>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps, null)(App);
