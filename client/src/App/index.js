import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Greeting from "./Greeting";
import Layout from "./Layout";
import MainContent from "./MainContent";
import DevProcess from "./DevProcess";
import ScrollToTop from "./ScrollToTop";
import ContentWrapper from "./Styled";

import { appType } from "src/types";

import lazyloadFaModules from "src/actions/lazyloadFaModules";

class App extends Component {
  static propTypes = {
    app: PropTypes.shape(appType).isRequired,
    theme: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    lazyloadFaModules: PropTypes.func.isRequired,
    location: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ).isRequired
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
      theme,
      location
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
      <ThemeProvider theme={theme}>
        <Layout>
          <TransitionGroup appear enter exit component={null}>
            <CSSTransition classNames="route" timeout={800} key={location.key}>
              <ScrollToTop>
                <Switch location={location}>
                  <Route exact path="/" component={MainContent} />
                  <Route exact path="/dev/:project" component={DevProcess} />
                </Switch>
              </ScrollToTop>
            </CSSTransition>
          </TransitionGroup>
        </Layout>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  lazyloadFaModules: bindActionCreators(lazyloadFaModules, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
