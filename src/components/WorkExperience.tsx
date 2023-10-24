import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const WorkContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fefafa;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 20px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  // flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
  justify-content: space-between;
  // max-width: 600px;
`;

const ExperienceBox = styled.div`
  width: 45%; /* Adjust the width as needed */
  background-color: white;
  // border: 0.5px solid #ddd;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
`;

const ExperienceTitle = styled.p`
  color: black;
  font-size: 24px;
`;

const ExperienceDate = styled.p`
  color: #ec5b53;
  font-size: 16px;
`;

const ExperienceDescription = styled.p`
  color: black;
  text-align: left;
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #ddd;
  border-radius: 10px; /* Rounded edges */
  margin-top: 10px;
`;

const ProgressFill = styled.div`
  height: 20px;
  background: #ec5b53;
  width: 80%;
  border-top-left-radius: 10px; /* Rounded left edge */
  border-bottom-left-radius: 10px; /* Rounded left edge */
  // text-align: left;
  color: white;
  font-size: 12px; /* Smaller text size */
  text-align: left;
  padding-left: 30px;
`;

const Work: React.FC = () => {
  return (
    <WorkContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ExperienceContainer>
        <ExperienceBox>
          <ExperienceTitle>UI/UX Designer</ExperienceTitle>
          <ExperienceDate>2015-2018</ExperienceDate>
          <ExperienceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ExperienceDescription>
          <ProgressBar>
            <ProgressFill>UI/UX Designer</ProgressFill>
          </ProgressBar>
        </ExperienceBox>
        <ExperienceBox>
          <ExperienceTitle>Web Designer</ExperienceTitle>
          <ExperienceDate>2015-2018</ExperienceDate>
          <ExperienceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ExperienceDescription>
          <ProgressBar>
            <ProgressFill>Web Designer</ProgressFill>
          </ProgressBar>
        </ExperienceBox>
        {/* Add more ExperienceBox sections for additional work experiences */}
      </ExperienceContainer>
      <ExperienceContainer>
        <ExperienceBox>
          <ExperienceTitle>Web Developer</ExperienceTitle>
          <ExperienceDate>2015-2018</ExperienceDate>
          <ExperienceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ExperienceDescription>
          <ProgressBar>
            <ProgressFill>Web Developer</ProgressFill>
          </ProgressBar>
        </ExperienceBox>
        <ExperienceBox>
          <ExperienceTitle>Graphic Designer</ExperienceTitle>
          <ExperienceDate>2015-2018</ExperienceDate>
          <ExperienceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ExperienceDescription>
          <ProgressBar>
            <ProgressFill>Graphic Designer</ProgressFill>
          </ProgressBar>
        </ExperienceBox>
        <ExperienceBox>
          <ExperienceTitle>Marketing</ExperienceTitle>
          <ExperienceDate>2015-2018</ExperienceDate>
          <ExperienceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ExperienceDescription>
          <ProgressBar>
            <ProgressFill>Marketing</ProgressFill>
          </ProgressBar>
        </ExperienceBox>
        {/* Add more ExperienceBox sections for additional work experiences */}
      </ExperienceContainer>
    </WorkContainer>
  );
};

export default Work;
