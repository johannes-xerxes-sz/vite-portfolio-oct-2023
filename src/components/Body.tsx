import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Body = styled.div`
  background-color: #fefafa;
  display: flex;
  align-items: center;
  padding: 100px; /* Increase the padding to 20px on all sides */
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
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
`;

const MiddleContent = styled.div`
  flex: 1;
`;

const PlaceholderPhoto = styled.img`
  width: 400px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #002d5b;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 5px 0;
  gap: 10px;
`;

const LearnMoreButton = styled.button`
  background-color: #ec5b53;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
        <NameDescription>
          <Name>I'm Web Developer</Name>
          <Name>Johannes Xerxes Dalogdog</Name>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec ullamcorper mattis, pulvinar dapibus leop
            ullamcorper, lorem ipsum.
          </Description>
          <MiddleContent>
            <LearnMoreButton>Learn more</LearnMoreButton>
          </MiddleContent>
        </NameDescription>
      </LeftContent>
      <PlaceholderPhoto src="placeholder.jpg" alt="Placeholder Photo" />
    </Body>
  );
};

export default Landing;
