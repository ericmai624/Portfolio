import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import MimojiDev from "./MimojiDev";
import JustagDev from "./JustagDev";
import HelpDeskDev from "./HelpDeskDev";

const DevProcess = ({ location }) => {
  const { pathname } = location;
  const project = pathname.replace("/dev/", "");

  switch (project) {
    case "mimoji":
      return <MimojiDev />;
    case "justag":
      return <JustagDev />;
    case "help_desk_v2.0":
      return <HelpDeskDev />;
    default:
      return null;
  }
};

DevProcess.propTypes = {
  /* eslint-disable */
  location: PropTypes.object.isRequired
};

export default withRouter(DevProcess);
