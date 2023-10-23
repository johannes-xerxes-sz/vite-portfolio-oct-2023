import React from "react";
import styled from "styled-components";
// import { SectionDescription } from "./style/Landing.styled";

const FooterContainer = styled.div`
  text-align: center;
  padding: 150px;
  position: relative;
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/web-developer-bg-min.jpg");
  background-size: cover;
  background-position: center;
`;

const BackgroundOverlay = styled.div`
  content: "";
  background: rgba(0, 0, 0, 0.5); /* Adjust the transparency here */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ServiceCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ec5b53;
  border-radius: 50%;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 40px;
  font-family: "Playfair Display", serif;
  color: white; /* Adjust the color as needed */
  margin: 10px auto;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1; /* Place the content above the background overlay */
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: white; /* Adjust the color as needed */
  margin: 20px auto;
  max-width: 500px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <BackgroundOverlay /> {/* Overlay for darkening the background image */}
      <FooterContent>
      <ServiceCircle />
        <SectionTitle>Footering Process</SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </SectionDescription>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
