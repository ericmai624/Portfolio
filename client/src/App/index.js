import React, { Component, Fragment } from 'react';

import Greetings from './Greetings';
import { ContentWrapper } from './Styled';

class App extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <ContentWrapper className='container'>
          <Greetings text='welcome to my site' />
        </ContentWrapper>
      </Fragment>
    );
  }
}

export default App;
