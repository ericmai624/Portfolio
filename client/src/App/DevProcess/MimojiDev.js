import React from "react";

import Template from "./Template";

const MimojiDev = () => {
  const stories = <div>story</div>;

  const wireframe = <div>wire</div>;

  const techStacks = <div>tech</div>;

  return (
    <Template
      overview="mimoji overview"
      problem="mimoji problem"
      stories={stories}
      wireframe={wireframe}
      challenges="some challenges"
      techStacks={techStacks}
    />
  );
};

export default MimojiDev;
