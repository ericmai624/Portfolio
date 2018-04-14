import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProjectCard from "src/App/ProjectCard";
import Container from "./Styled";

import fetchProjects from "src/actions/fetchProjects";

import { projectsType } from "src/types";

class AdditionalProjects extends PureComponent {
  static propTypes = {
    projects: PropTypes.shape(projectsType).isRequired,
    fetchProjects: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchProjects().then(() => {
      window.sr.sync();
    });
  }

  render() {
    const { projects } = this.props;

    return (
      <Container>
        {projects.content.map(({ id, ...project }) => (
          <ProjectCard key={id} project={project} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: bindActionCreators(fetchProjects, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalProjects);
