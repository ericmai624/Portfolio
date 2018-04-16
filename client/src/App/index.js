import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Greeting from "./Greeting";
import Layout from "./Layout";
import MainContent from "./MainContent";
import DevProcess from "./DevProcess";
import ContentWrapper from "./Styled";

import { appType } from "src/types";

import lazyloadFaModules from "src/actions/lazyloadFaModules";

class App extends Component {
  static propTypes = {
    app: PropTypes.shape(appType).isRequired,
    theme: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    lazyloadFaModules: PropTypes.func.isRequired
  };

  static defaultProps = {
    theme: {
      main: "#F6470F"
    }
  };

  componentDidMount() {
    this.props.lazyloadFaModules();
  }

  render() {
    const {
      app: { fontColor: color, isBlackBg, displayGreeting },
      theme
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
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <Fragment>
              <Route exact path="/" component={MainContent} />
              <Route path="/dev/:project" component={DevProcess} />
            </Fragment>
          </Layout>
        </ThemeProvider>
      </Router>
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
