import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #f1eff4;
  height: 200px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: auto;
  margin-top: 18vh;
  margin-bottom: 24vh;
`;
const Presentation = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 2.6rem;
  line-height: 3.1rem;
  margin-bottom: 1.5rem;
`;
const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
`;

const Intro = () => {
  return (
    <Section>
      <Content>
        <Presentation>
          <Title>Hey there, I’m Christian Veigt</Title>
          <Description>
            A product designer and developer in Vancouver, currently working on
            design systems <a href="\">@hashicorp</a>.
            <br />
            Previously, I designed <a href="\">@twilio</a>.
          </Description>
        </Presentation>
      </Content>
    </Section>
  );
};

export default Intro;
