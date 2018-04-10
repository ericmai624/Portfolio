import React, { Fragment } from "react";

import {
  Container,
  Title,
  MockBtn,
  Content,
  Screenshot,
  TechStack
} from "./Styled";

const FeaturedProject = () => (
  <Fragment>
    <Container className="col-12 col-xl-6">
      <Title className="row">
        <MockBtn color="#ed6a5f" />
        <MockBtn color="#f6c251" />
        <MockBtn color="#61c454" />
      </Title>
      <Content className="row">
        <Screenshot src="/assets/mimoji.jpg" alt="mimoji screenshot" />
      </Content>
    </Container>
    <Container className="col-12 col-xl-5">
      <h2>
        MIMOJI{" "}
        <span role="img" aria-label="smiling cat">
          😺
        </span>
      </h2>
      <h4>Plays local videos on TV or browser with stunning graphics</h4>
      <p className="info">
        Mimoji allows the user to select a local computer video with any sizes
        and formats to be played either on the browser or TV via Chromecast.
        Selected video will be transcoded on the fly to browser or Chromecast
        support formats for high-quality playback. Mimoji is designed to run on
        the user&apos;s computer locally in order to read real-time file system
        changes
      </p>
      <p className="techstack">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        and&nbsp;<TechStack>React</TechStack>&nbsp;
        <TechStack>Node.js</TechStack>&nbsp;
        <TechStack>Express</TechStack>&nbsp;
      </p>
    </Container>
  </Fragment>
);

export default FeaturedProject;
