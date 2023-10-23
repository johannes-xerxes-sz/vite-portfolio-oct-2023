import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionDescription,
} from "./style/Landing.styled";

const ServicesContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 900px;
`;

const ServiceSquare = styled.div`
  width: 30%;
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px; /* Add spacing between squares */
`;

const ServiceCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ec5b53;
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

const ServiceArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ec5b53;
  border-radius: 50%;
  margin: 20px auto;
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
          <ServiceCircle />
          <ServiceTitle>Service 1</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircle />
          <ServiceTitle>Service 2</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircle />
          <ServiceTitle>Service 3</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ServiceDescription>
          <ServiceArrow />
        </ServiceSquare>
      </ServiceContainer>
    </ServicesContainer>
  );
};

export default Services;
