import React from "react";

import Template from "./Template";

const JustagDev = () => {
  const stories = <div>story</div>;

  const wireframe = <div>wire</div>;

  const techStacks = <div>tech</div>;

  return (
    <Template
      overview="justag overview"
      problem="mimoji problem"
      stories={stories}
      wireframe={wireframe}
      challenges="some challenges"
      techStacks={techStacks}
    />
  );
};

export default JustagDev;
