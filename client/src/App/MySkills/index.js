import React, { Component, Fragment } from "react";
import PropsTypes from "prop-types";
import { SkillsContainer, Bracket, Text, Content, Comma } from "./Styled";

class MySkills extends Component {
  static defaultProps = {
    skills: [
      {
        type: "languages",
        content: ["JavaScript(ES6)", "HTML", "CSS/SASS", "Python", "SQL"]
      },
      { type: "frontend", content: ["React", "Angular", "jQuery", "Redux"] },
      {
        type: "backend",
        content: [
          "Node",
          "Express",
          "Socket.io",
          "PostgreSQL",
          "MongoDB",
          "GraphQL"
        ]
      },
      {
        type: "tools",
        content: ["Babel", "Webpack", "Gulp", "Git", "Bash", "FFmpeg"]
      }
    ]
  };

  static propTypes = {
    skills: PropsTypes.arrayOf(
      PropsTypes.shape({
        type: PropsTypes.string,
        content: PropsTypes.arrayOf(PropsTypes.string)
      })
    )
  };

  componentDidMount() {}

  renderContent = (content, index, list) => {
    if (index === list.length - 1) {
      return (
        <Content key={content} style={{ marginRight: 0 }}>
          {content}
        </Content>
      );
    }
    return (
      <Content key={content}>
        {content}
        <Comma>,</Comma>
      </Content>
    );
  };

  render() {
    const { skills } = this.props;

    return (
      <Fragment>
        {skills.map(skill => (
          <SkillsContainer key={skill.type}>
            {/* <Text>{`${skill.type.toUpperCase()}:`}</Text> */}
            <Bracket>[</Bracket>
            {skill.content.map(this.renderContent)}
            <Bracket>]</Bracket>
          </SkillsContainer>
        ))}
      </Fragment>
    );
  }
}

export default MySkills;
