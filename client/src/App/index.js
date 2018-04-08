import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RandomAppearText from './RandomAppearText';
import Nav from './Nav';
import { ContentWrapper, SlideBackground, Greetings } from './Styled';

class App extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired
  }

  state = {

  }

  render() {
    const { styles } = this.props;

    return (
      <ContentWrapper
        dynamicStyles={styles}
      >
        <Greetings className='container'>
          <div className='row'>
            <RandomAppearText text='Welcome' />
          </div>
          <Nav />
        </Greetings>
        <SlideBackground dynamicStyles={styles} />
      </ContentWrapper>
    );
  }
}

const mapStateToProps = state => ({
  styles: state.styles
});

export default connect(mapStateToProps, null)(App);
