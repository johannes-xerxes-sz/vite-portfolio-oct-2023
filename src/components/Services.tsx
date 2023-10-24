import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionDescription,
  DividerTitle,
} from "./style/Landing.styled";
import { ArrowCircleRightOutlined } from "@mui/icons-material";

const ServicesContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 50px; /* Add margin for smaller screens */

  @media (min-width: 768px) {
    margin-top: 0; /* Reset margin for larger screens */
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack services on smaller screens */
    align-items: center; /* Center align the services */
  }
`;

const ServiceSquare = styled.div`
  width: 80%; /* Adjust width for better responsiveness */
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin: 0 20px 20px; /* Add spacing between squares */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
`;

const ServiceCircleUI = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

const ServiceCircleMarketing = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/ads-150x150.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

const ServiceCircleWebDev = styled.div`
  width: 50px;
  height: 50px;
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/settings.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;
const ServiceTitle = styled.h3`
  font-size: 24px;
  color: #002d5b;
  margin: 20px 0;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
`;

const ServiceArrow = styled(ArrowCircleRightOutlined)`
  border-radius: 50%;
  margin: 20px auto;
  color: #54595f;
  transform: scale(2);
  cursor: pointer;
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <SectionTitle>What Services I'm Providing</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ServiceContainer>
        <ServiceSquare>
          <ServiceCircleUI />
          <ServiceTitle>UI/UX Design</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircleMarketing />
          <ServiceTitle>Digital Marketing</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircleWebDev />
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
      </ServiceContainer>
    </ServicesContainer>
  );
};

export default Services;
