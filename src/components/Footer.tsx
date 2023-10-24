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
`;

const Logo = styled.img`
  height: 50px; /* Adjust the size as needed */
  margin-top: 50px;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
`;

const SectionDescription = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center;
`;

const Copyright = styled.span`
  margin-top: 150px; /* Add some space between the logo and the copyright */
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
