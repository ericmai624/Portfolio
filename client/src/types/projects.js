import PropTypes from "prop-types";

const projectsType = {
  content: PropTypes.arrayOf(PropTypes.object),
  pending: PropTypes.bool,
  fulfilled: PropTypes.bool,
  rejected: PropTypes.bool
};

export default projectsType;
