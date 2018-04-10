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
        <a
          href="https://youtu.be/jJ3qixXlKhE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Screenshot src="/assets/mimoji.jpg" alt="mimoji screenshot" />
        </a>
      </Content>
    </Container>
    <Container className="col-12 col-xl-5">
      <h2>
        Mimoji&nbsp;
        <span role="img" aria-label="smiling cat">
          😺
        </span>
      </h2>
      <h4>Plays local videos on TV or browser with stunning graphics</h4>
      <p className="info">
        Mimoji allows the user to select a local computer video with any sizes
        and formats to be played either on the browser or TV via Chromecast.
        Selected video will be transcoded on the fly to browser or Chromecast
        supported formats for high-quality playback. Mimoji is designed to run
        on the user&apos;s computer locally in order to read real-time file
        system changes
      </p>
      <p className="techstacks">
        Made with&nbsp;
        <span role="img" aria-label="heart">
          ❤️
        </span>&nbsp; and&nbsp;<TechStack>React</TechStack>
        <TechStack>Node.js</TechStack>
        <TechStack>Express</TechStack>
      </p>
    </Container>
  </Fragment>
);

export default FeaturedProject;
