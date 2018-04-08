import React, { Component, Fragment } from 'react';

import NavLink from 'src/App/NavLink';
import { NavContainer, Sep } from './Styled';

class Nav extends Component {
  state = {
    links: [
      { title: 'Projects', href: '/projects', status: '' },
      { title: 'Resume', href: '/resume', status: '' },
      { title: 'Contact', href: '/contact', status: '' }
    ]
  }

  render() {
    const { links } = this.state;

    return (
      <NavContainer className='row'>
        {links.map(link => (
          <Fragment key={link.title}>
            <NavLink text={link.title} />
            <Sep />
          </Fragment>
        ))}
      </NavContainer>
    );
  }
}

export default Nav;
