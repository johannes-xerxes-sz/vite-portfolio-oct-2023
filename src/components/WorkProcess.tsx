import React from "react";
import styled from "styled-components";
import { PlayCircleOutlined } from "@mui/icons-material";

const WorkContainer = styled.div`
  text-align: center;
  padding: 200px; /* Adjust the padding for better responsiveness */
  position: relative;
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/web-developer-bg-min.jpg");
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 50px; /* Adjust the padding for better responsiveness */
  }
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


const ServiceCircle = styled(PlayCircleOutlined)`
  border-radius: 50%;
  margin: 20px auto;
  color: white;
  transform: scale(3);
  cursor: pointer;
`;

const SectionTitle = styled.h3`
  font-size: 32px; /* Reduce font size for better responsiveness */
  font-family: "Playfair Display", serif;
  color: white; /* Adjust the color as needed */
  margin: 10px auto;
`;

const WorkContent = styled.div`
  position: relative;
  z-index: 1; /* Place the content above the background overlay */
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: white; /* Adjust the color as needed */
  margin: 20px auto;
  max-width: 500px;
`;

const Work: React.FC = () => {
  return (
    <WorkContainer>
      <BackgroundOverlay /> {/* Overlay for darkening the background image */}
      <WorkContent>
        <ServiceCircle />
        <SectionTitle>Working Process</SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </SectionDescription>
      </WorkContent>
    </WorkContainer>
  );
};

export default Work;
