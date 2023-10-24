import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionDescription,
  MainButton1,
  DividerTitle,
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

  @media (max-width: 768px) {
    width: 15%;
  }
`;

const LeftSide = styled.div`
  text-align: left;
`;

const Subtitle = styled.h5`
  font-size: 30px;
  font-family: "Playfair Display", serif;
  color: #002d5b;
  margin: 10px 0;
  max-width: 400px;
`;

const DualDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 20px 0;
  text-align: left;
  max-width: 600px;

  @media (min-width: 768px) {
    margin: 20px 10px;
  }
`;

const PhotoContainer = styled.div`
  width: 500px;
  height: 380px;
  background-color: #ec5b53;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const PlaceholderPhoto = styled.img`
  width: 300px;
  height: 380px;
  border-radius: 10px;
  left: -10px;
  position: absolute;
  @media (min-width: 768px) {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
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
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Description>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </Description>
          <Description>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Description>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Description>
          </Description>
          <PhotoContainer>
            <PlaceholderPhoto
              src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg"
              alt="Placeholder Photo"
            />
          </PhotoContainer>
        </DualDescriptions>
        <ButtonContainer>
          <MainButton1>Contact Me</MainButton1>
        </ButtonContainer>
      </LeftSide>
    </AboutContainer>
  );
};

export default About;
