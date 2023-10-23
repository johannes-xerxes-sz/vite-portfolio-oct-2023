import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionDescription,
  MainButton1,
} from "./style/Landing.styled";

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const Divider = styled.hr`
  width: 5%;
  margin: 10px auto;
  margin-left: 0px;
  border: 1px solid #ec5b53;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const LeftSide = styled.div`
  text-align: left;
`;

const Subtitle = styled.h4`
  font-size: 30px;
  font-family: "Playfair Display", serif;
  color: #002d5b;
  margin: 10px 0;
  max-width: 400px;
`;

const DualDescriptions = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 20px 0;
  margin-right: 50px;
  margin-bottom: 50px;
  max-width: 500px;
`;

const PhotoContainer = styled.div`
  position: relative;
  background-color: #ec5b53;
  padding: 10px;
  border-radius: 10px;
`;

const PlaceholderPhoto = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <LeftSide>
        <Subtitle>
          Developing With a Passion While Exploring The World.
        </Subtitle>
        <Divider />
        <DualDescriptions>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Description>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Description>
          <PhotoContainer>
            <PlaceholderPhoto
              src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg"
              alt="Placeholder Photo"
            />
          </PhotoContainer>
        </DualDescriptions>
        <MainButton1>Contact Me</MainButton1>
      </LeftSide>
    </AboutContainer>
  );
};

export default About;
