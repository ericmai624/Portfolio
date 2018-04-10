import React from "react";

import { Container, Title, MockBtn, Content, Screenshot } from "./Styled";

const FeaturedProject = () => (
  <Container className="col-10 col-md-8">
    <Title className="row">
      <MockBtn color="#ed6a5f" />
      <MockBtn color="#f6c251" />
      <MockBtn color="#61c454" />
    </Title>
    <Content className="row">
      <Screenshot src="/assets/mimoji.png" alt="mimoji screenshot" />
    </Content>
  </Container>
);

export default FeaturedProject;
