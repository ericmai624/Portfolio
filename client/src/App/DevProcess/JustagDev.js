import React from "react";

import Template from "./Template";

const JustagDev = () => {
  const stories = <div>story</div>;

  const planning = <div>wire</div>;

  return (
    <Template
      overview="justag overview"
      problem="mimoji problem"
      stories={stories}
      planning={planning}
      challenges="some challenges"
      techStacks={["js", "html5", "css3", "angular", "node"]}
    />
  );
};

export default JustagDev;
