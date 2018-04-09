import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { random, range } from 'lodash';

import Button from './Styled';

class NavLink extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    isHovered: false,
    isTransforming: false
  }

  componentDidMount() {
    this.elements = document.querySelectorAll('[data-type=special]');
    this.indices = range(this.elements.length);
  }

  componentWillUnmount() {
    this.clearTransform();
  }

  triggerHover = () => {
    const { isHovered, isTransforming } = this.state;
    if (isTransforming) {
      return this.setState({ isHovered: false });
    }
    return this.setState({ isHovered: !isHovered });
  }

  fadeoutChar = () => {
    if (!this.indices.length) {
      return; // trigger something after all words disappear
    }

    const leng = this.indices.length - 1;
    const i = random(0, leng);
    const picked = this.indices[i];
    const element = this.elements[picked];

    element.style.opacity = 0;
    this.indices[i] = this.indices[leng];
    this.indices.pop();

    if (element.innerText === ' ') {
      this.timeout = setTimeout(this.fadeoutChar);
    } else {
      this.timeout = setTimeout(this.fadeoutChar, 20);
    }
  }

  triggerTransform = () => {
    const { isTransforming } = this.state;
    if (!isTransforming) {
      this.setState({
        isTransforming: true,
        isHovered: false
      }, this.fadeoutChar);
    }
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
        onClick={this.triggerTransform}
        onMouseEnter={this.triggerHover}
        onMouseLeave={this.triggerHover}
      >
        {text.split('').map(this.renderWords)}
      </Button>
    );
  }
}

export default NavLink;
