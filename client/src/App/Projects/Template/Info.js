import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  DescrWrapper,
  ProjectName,
  TechStacks,
  Tech,
  NoStyleLink
} from "../Styled";
import { Emoji } from "src/App/Common/Styled";

const Info = ({
  innerWidth,
  displayInfo,
  emoji,
  name,
  techStacks,
  FontAwesomeIcon
}) => (
  <Fragment>
    {innerWidth >= 992 ? (
      <NoStyleLink to={`/dev/${name.toLowerCase()}`}>
        <DescrWrapper displayInfo={displayInfo}>
          {emoji ? (
            <ProjectName displayInfo={displayInfo}>
              {name.replace(/_/g, " ")}
              &nbsp;<Emoji>{emoji}</Emoji>
            </ProjectName>
          ) : (
            <ProjectName displayInfo={displayInfo}>
              {name.replace(/_/g, " ")}
            </ProjectName>
          )}
          {FontAwesomeIcon ? (
            <TechStacks displayInfo={displayInfo}>
              Made with&nbsp;<FontAwesomeIcon icon={["fas", "heart"]} />&nbsp;and
            </TechStacks>
          ) : null}
          <TechStacks displayInfo={displayInfo}>
            {techStacks.map(ts => <Tech key={ts}>{ts}</Tech>)}
          </TechStacks>
        </DescrWrapper>
      </NoStyleLink>
    ) : (
      <DescrWrapper displayInfo={displayInfo}>
        {emoji ? (
          <ProjectName displayInfo={displayInfo}>
            {name.replace(/_/g, " ")}
            &nbsp;<Emoji>{emoji}</Emoji>
          </ProjectName>
        ) : (
          <ProjectName displayInfo={displayInfo}>
            {name.replace(/_/g, " ")}
          </ProjectName>
        )}
        {FontAwesomeIcon ? (
          <TechStacks displayInfo={displayInfo}>
            Made with&nbsp;<FontAwesomeIcon icon={["fas", "heart"]} />&nbsp;and
          </TechStacks>
        ) : null}
        <TechStacks displayInfo={displayInfo}>
          {techStacks.map(ts => <Tech key={ts}>{ts}</Tech>)}
        </TechStacks>
      </DescrWrapper>
    )}
  </Fragment>
);

Info.propTypes = {
  innerWidth: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  displayInfo: PropTypes.bool.isRequired,
  emoji: PropTypes.node,
  FontAwesomeIcon: PropTypes.func
};

Info.defaultProps = {
  emoji: null,
  FontAwesomeIcon: null
};

const mapStateToProps = state => ({
  FontAwesomeIcon: state.fontawesome.FontAwesomeIcon
});

export default connect(mapStateToProps, null)(Info);
