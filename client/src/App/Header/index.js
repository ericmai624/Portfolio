import React, { Component } from 'react';

import { SiteNav } from './Styled';

class Header extends Component {
  handleClick = () => {

  }

  render() {
    return (
      <SiteNav className='row'>
        <div className='col-md-8'>
          <span>Projects</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>
      </SiteNav>
    );
  }
}

export default Header;
