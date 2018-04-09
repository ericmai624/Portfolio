import React, { Component } from 'react';

import NavLink from 'src/App/NavLink';
import NavContainer from './Styled';

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
          <NavLink key={link.title} text={link.title} />
        ))}
      </NavContainer>
    );
  }
}

export default Nav;
