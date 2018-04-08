import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { random, range } from 'lodash';

import { Letter } from './Styled';

import { transformText } from 'util';

class Greetings extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    words: transformText(this.props.text)
  }

  componentDidMount() {
    const { words } = this.state;
    this.indices = range(words.length);
    this.emergeChar();
  }

  emergeChar = () => {
    if (!this.indices.length) {
      return null;
    }
    const { words } = this.state;
    const idx = random(0, this.indices.length - 1);
    const picked = this.indices[idx];
    this.indices[idx] = this.indices[this.indices.length - 1];
    this.indices.pop();

    words[picked].isVisible = true;
    return this.setState({ words }, () => {
      setTimeout(this.emergeChar, 200);
    });
  }

  render() {
    const { words } = this.state;

    return (
      <Fragment>
        {words.map(({ letter, isVisible }, i) => (
          <Letter key={i} isVisible={isVisible}>{letter}</Letter>
        ))}
      </Fragment>
    );
  }
}

export default Greetings;
