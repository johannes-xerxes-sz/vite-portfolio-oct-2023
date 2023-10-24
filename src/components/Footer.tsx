import React from "react";
import styled from "styled-components";
import { LinkedIn, Facebook, Twitter, Instagram } from "@mui/icons-material";
import viteLogo from "/vite.svg"; // Make sure to adjust the path to your logo

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center; /* Center the content horizontally */
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Add margin at the bottom for spacing */
    margin-top: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: center; /* Center the social icons horizontally */
    margin-bottom: 20px; /* Add margin at the bottom for spacing */
  }
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0 10px; /* Add margin between icons */
  }
`;

const SectionDescription = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Copyright = styled.span`
  margin-top: 150px; /* Add some space between the logo and the copyright */

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust the font size */
    margin-top: 10px; /* Add some space between the logo and the copyright */
  }
`;

const Email = styled.div`
  font-size: 16px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icon>
          <LinkedIn />
        </Icon>
        <Icon>
          <Facebook />
        </Icon>
        <Icon>
          <Twitter />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
      </SocialIcons>
      <SectionDescription>
        <Logo src={viteLogo} alt="Vite Logo" />
        <Copyright>Copyright © 2023 Personal Portfolio</Copyright>
      </SectionDescription>
      <Email>mail@example.com</Email>
    </FooterContainer>
  );
};

export default Footer;
