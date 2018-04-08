import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { random, range } from 'lodash';

import Letter from './Styled';

import triggerBackgroundChange from 'src/actions/triggerBackgroundChange';

class RandomAppearText extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    triggerBackgroundChange: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.words = document.querySelectorAll('span[data-type=special]');
    this.indices = range(this.words.length);
    this.timeout = setTimeout(this.emergeChar, 100);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  emergeChar = () => {
    if (!this.indices.length) {
      return this.props.triggerBackgroundChange();
    }

    const leng = this.indices.length - 1;
    const i = random(0, leng);
    const picked = this.indices[i];

    this.words[picked].style.opacity = 1;
    this.indices[i] = this.indices[leng];
    this.indices.pop();
    this.timeout = setTimeout(this.emergeChar, 180);

    return this.timeout;
  }

  render() {
    const { text } = this.props;

    return (
      <Fragment>
        {text.split('').map((letter, i) => (
          <Letter key={i} data-type='special' style={{ opacity: 0 }}>{letter}</Letter>
        ))}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  triggerBackgroundChange: bindActionCreators(triggerBackgroundChange, dispatch)
});

export default connect(null, mapDispatchToProps)(RandomAppearText);
