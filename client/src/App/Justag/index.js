import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import { ProjectInfo, ProjectTSList, ProjectTS } from "src/App/Common/Styled";

const Justag = ({ techStacks }) => (
  <Fragment>
    <MockChrome imgSrc="/assets/jt_macbook.jpg" project="justag" />
    <div className="col-12">
      <h2>Justag</h2>
      <h4>Just another movie rating app</h4>
      <ProjectInfo>
        Justag is a simple application built on React and Node.js to fetch and
        scrape movie ratings from multiple sources.Development focused on
        concurrency and code reusability.
      </ProjectInfo>
      <ProjectTSList className="row">
        {techStacks.map(ts => <ProjectTS key={ts}>{ts}</ProjectTS>)}
      </ProjectTSList>
    </div>
  </Fragment>
);

Justag.defaultProps = {
  techStacks: [
    "JavaScript",
    "Angular",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB"
  ]
};

Justag.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string)
};

export default Justag;
