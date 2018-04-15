import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { random, range } from "lodash";

import Button from "./Styled";
import { StyledLink } from "src/App/Common/Styled";

import hideGreeting from "src/actions/hideGreeting";

class More extends PureComponent {
  static propTypes = {
    isBlackBg: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    hideGreeting: PropTypes.func.isRequired
  };

  state = {
    isHovered: false
  };

  componentDidMount() {
    this.elements = document.querySelectorAll("[data-type=special]");
    this.indices = range(this.elements.length);
  }

  componentWillUnmount() {
    this.clearTransform();
  }

  onTransformComplete = () => {
    this.props.hideGreeting();
  };

  handleHover = () => {
    const { isHovered } = this.state;
    this.setState({ isHovered: !isHovered });
  };

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

    if (element.innerText === " ") {
      this.timeout = setTimeout(this.fadeOutChar);
    } else {
      this.timeout = setTimeout(this.fadeOutChar, 15);
    }

    return this.timeout;
  };

  clearTransform = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  renderWords = (word, i) => (
    <small key={i} data-type="special">
      {word}
    </small>
  );

  render() {
    const { text, isBlackBg } = this.props;
    const { isHovered } = this.state;

    return (
      <Button
        isHovered={isHovered}
        onClick={this.fadeOutChar}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        style={{ zIndex: isBlackBg ? -5 : 1 }}
      >
        <StyledLink>{text.split("").map(this.renderWords)}</StyledLink>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  isBlackBg: state.app.isBlackBg
});

const mapDispatchToProps = dispatch => ({
  hideGreeting: bindActionCreators(hideGreeting, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(More);
