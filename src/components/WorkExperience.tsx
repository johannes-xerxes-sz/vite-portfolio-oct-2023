import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const WorkContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const Work: React.FC = () => {
  return (
    <WorkContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
    </WorkContainer>
  );
};

export default Work;
