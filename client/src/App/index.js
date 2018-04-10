import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Greeting from './Greeting';
import MainContent from './MainContent';
import ContentWrapper from './Styled';

import { appType } from 'src/types';

class App extends Component {
  static propTypes = {
    app: PropTypes.shape(appType).isRequired
  }

  state = {

  }

  render() {
    const { app } = this.props;

    return (
      <ContentWrapper dynamicStyles={app}>
        {/* <Greeting display={app.displayGreeting} /> */}
        <MainContent display={app.displayGreeting} />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps, null)(App);
