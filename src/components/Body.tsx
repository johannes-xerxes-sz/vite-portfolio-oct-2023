import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { MainButton1 } from "./style/Landing.styled";

const Body = styled.div`
  background-color: #fefafa;
  display: flex;
  align-items: center;
  padding: 100px; /* Increase the padding to 20px on all sides */
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
  margin-right: 20px;
  margin-bottom: 170px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #002d5b;
`;

const NameDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 65px;
  margin: 0;
  color: #002d5b;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
  max-width: 500px; /* Set a maximum width for the text to wrap */
`;

const MiddleContent = styled.div`
  flex: 1;
  margin: 15px 0;
`;

const Space = styled.div`
  flex: 21;
  margin: 20px 0;
`;

const PlaceholderPhoto = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #002d5b;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
`;

const Landing: React.FC = () => {
  return (
    <Body>
      <LeftContent>
        <SocialIcons>
          <SocialIcon href="https://www.linkedin.com/">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com/">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/">
            <InstagramIcon />
          </SocialIcon>
        </SocialIcons>
        <Space />
      </LeftContent>
      <NameDescription>
        <Name>I'm Web Developer</Name>
        <Name>Natalie E. Watson</Name>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctus nec ullamcorper mattis, pulvinar dapibus leop
          ullamcorper, lorem ipsum.
        </Description>
        <MiddleContent>
          <MainButton1>Learn more</MainButton1>
        </MiddleContent>
      </NameDescription>
      <PlaceholderPhoto
        src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2022/02/h1_hero-bg.png"
        alt="Placeholder Photo"
      />
    </Body>
  );
};

export default Landing;
