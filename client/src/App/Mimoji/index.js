import React, { Fragment } from "react";
import PropTypes from "prop-types";

import MockChrome from "src/App/MockChrome";
import {
  Emoji,
  ProjectInfo,
  ProjectTSList,
  ProjectTS
} from "src/App/Common/Styled";

const Mimoji = ({ techStacks }) => (
  <Fragment>
    <MockChrome imgSrc="/assets/mimoji.jpg" project="mimoji" />
    <div className="col-12">
      <h2>
        Mimoji&nbsp;
        <Emoji>😺</Emoji>
      </h2>
      <h4>Plays local videos on TV or browser with stunning graphics</h4>
      <ProjectInfo>
        Mimoji allows the user to select a local computer video with any sizes
        and formats to be played either on the browser or TV via Chromecast.
        Selected video will be transcoded on the fly to browser or Chromecast
        supported formats for high-quality playback. Mimoji is designed to run
        on the user&apos;s computer locally in order to read real-time file
        system changes
      </ProjectInfo>
      <ProjectTSList className="row">
        {techStacks.map(ts => <ProjectTS key={ts}>{ts}</ProjectTS>)}
      </ProjectTSList>
    </div>
  </Fragment>
);

Mimoji.defaultProps = {
  techStacks: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "FFmpeg"
  ]
};

Mimoji.propTypes = {
  techStacks: PropTypes.arrayOf(PropTypes.string)
};

export default Mimoji;
