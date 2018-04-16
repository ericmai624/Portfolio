import React from "react";

import Template from "./Template";
import MockChrome from "src/App/MockChrome";
import { Section, WireframeImg, WireframeImgWrapper } from "./Styled";

const MimojiDev = () => {
  const stories = <div>story</div>;

  const planning = (
    <Section>
      <h4>Main page</h4>
      <div className="row">
        <WireframeImgWrapper>
          <WireframeImg
            src="/public/assets/wireframes/mimoji/mockup_mimoji1.png"
            alt="mimoji_wireframe_1"
          />
        </WireframeImgWrapper>
        <WireframeImgWrapper>
          <MockChrome
            imgSrc="/public/assets/wireframes/mimoji/mimoji1.jpg"
            project="mimoji"
            style={{ borderRadius: 0, boxShadow: "unset" }}
          />
        </WireframeImgWrapper>
      </div>
      <h4>File browser</h4>
      <div className="row">
        <WireframeImgWrapper>
          <WireframeImg
            src="/public/assets/wireframes/mimoji/mockup_mimoji2.png"
            alt="mimoji_wireframe_1"
          />
        </WireframeImgWrapper>
        <WireframeImgWrapper>
          <MockChrome
            imgSrc="/public/assets/wireframes/mimoji/mimoji2.jpg"
            project="mimoji"
            style={{ borderRadius: 0, boxShadow: "unset" }}
          />
        </WireframeImgWrapper>
      </div>
      <h4>Playback on browser</h4>
      <div className="row">
        <WireframeImgWrapper>
          <WireframeImg
            src="/public/assets/wireframes/mimoji/mockup_mimoji3.png"
            alt="mimoji_wireframe_1"
          />
        </WireframeImgWrapper>
        <WireframeImgWrapper>
          <MockChrome
            imgSrc="/public/assets/wireframes/mimoji/mimoji3.png"
            project="mimoji"
            style={{ borderRadius: 0, boxShadow: "unset" }}
          />
        </WireframeImgWrapper>
      </div>
    </Section>
  );

  const techStacks = <div>tech</div>;

  return (
    <Template
      overview={
        "Mimoji allows the user to select a local computer video with any sizes " +
        "and formats to be played either on the browser or TV via Chromecast. " +
        "Selected video will be transcoded on the fly to browser or Chromecast " +
        "supported formats for high-quality playback. Mimoji is designed to run on " +
        "the user's computer locally in order to read real-time file system changes"
      }
      problem="I have been using a program which provides similar functionalities. However, I started to experience occasional buffering and delays since the most recent update. Instead of waiting for the developers to fix the issue, I decided to create my own and started from scratch. Mimoji was aimed to solve the playback issue as well as optimize picture qualities."
      challenges="The first challenge of this project is how to start. As the sole owner of this project, I need to validate ideas of different ways to tackle this problem.  Nothing good comes easily, many other challenges arose during the development process. For example, compatibilities among different generations of Chromecast and browsers; different file systems and process management on Mac and Windows; and the core problem - convert a video of any size and any format to a Chromecast or browser-supported format with the best picture quality on the fly."
      stories={stories}
      planning={planning}
      techStacks={techStacks}
    />
  );
};

export default MimojiDev;
