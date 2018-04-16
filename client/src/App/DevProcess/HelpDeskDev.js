import React from "react";

import Template from "./Template";

const HelpDeskDev = () => {
  const stories = <div>story</div>;

  const planning = <div>wire</div>;

  return (
    <Template
      overview="help Desk overview"
      problem="mimoji problem"
      challenges="some challenges"
      stories={stories}
      planning={planning}
      techStacks={[]}
    />
  );
};

export default HelpDeskDev;
