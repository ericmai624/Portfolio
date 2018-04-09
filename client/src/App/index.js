import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from './Nav';
import Greeting from './Greeting';
import Resume from './Resume';
import { ContentWrapper, Content, Msg } from './Styled';

import { stylesType } from 'src/types';

class App extends Component {
  static propTypes = {
    styles: PropTypes.shape(stylesType).isRequired
  }

  state = {

  }

  render() {
    const { styles } = this.props;

    return (
      <Fragment>
        <ContentWrapper dynamicStyles={styles}>
          <Content>
            <Msg id='greeting'>
              <Greeting text={'Hi, I\'m Eric.'} />
            </Msg>
            <Nav />
          </Content>
        </ContentWrapper>
        <Resume />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  styles: state.styles
});

export default connect(mapStateToProps, null)(App);
