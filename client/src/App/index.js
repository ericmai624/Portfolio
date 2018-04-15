import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Greeting from "./Greeting";
import Layout from "./Layout";
import MainContent from "./MainContent";
import ContentWrapper from "./Styled";

import { appType } from "src/types";

import lazyloadFaModules from "src/actions/lazyloadFaModules";

class App extends Component {
  static propTypes = {
    app: PropTypes.shape(appType).isRequired,
    lazyloadFaModules: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.lazyloadFaModules();
  }

  render() {
    const {
      app: { fontColor: color, isBlackBg, displayGreeting }
    } = this.props;

    if (displayGreeting) {
      return (
        <ContentWrapper
          style={{
            color,
            backgroundPosition: isBlackBg ? "right bottom" : "left bottom"
          }}
        >
          <Greeting display={displayGreeting} />
        </ContentWrapper>
      );
    }

    return (
      <Layout>
        <MainContent />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  lazyloadFaModules: bindActionCreators(lazyloadFaModules, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
