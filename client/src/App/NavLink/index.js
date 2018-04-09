import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { random, range } from 'lodash';

import Button from './Styled';

class NavLink extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    isHovered: false
  }

  componentDidMount() {
    this.elements = document.querySelectorAll('[data-type=special]');
    this.indices = range(this.elements.length);
  }

  componentWillUnmount() {
    this.clearTransform();
  }

  onTransformComplete = () => {

  }

  handleHover = () => {
    const { isHovered } = this.state;
    this.setState({ isHovered: !isHovered });
  }

  fadeOutChar = () => {
    if (!this.indices.length) {
      return this.onTransformComplete();
    }

    const leng = this.indices.length - 1;
    const i = random(0, leng);
    const picked = this.indices[i];
    const element = this.elements[picked];

    element.style.opacity = 0;
    this.indices[i] = this.indices[leng];
    this.indices.pop();

    if (element.innerText === ' ') {
      this.timeout = setTimeout(this.fadeOutChar);
    } else {
      this.timeout = setTimeout(this.fadeOutChar, 20);
    }

    return this.timeout;
  }

  clearTransform = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  renderWords = (word, i) => (
    <small key={i} data-type='special'>{word}</small>
  );

  render() {
    const { text } = this.props;
    const { isHovered } = this.state;

    return (
      <Button
        isHovered={isHovered}
        onClick={this.fadeOutChar}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {text.split('').map(this.renderWords)}
      </Button>
    );
  }
}

export default NavLink;
