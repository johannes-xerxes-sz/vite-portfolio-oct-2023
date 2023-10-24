import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const TestimonialsContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fefafa;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const ServiceDivider = styled.hr`
  width: 15%;
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

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <SectionTitle>What My Clients Says</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ServiceContainer>
        <ServiceSquare>
          <ServiceCircle />
          <ServiceTitle>Service 1</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceDivider />
          <ServiceDescription>John Doe</ServiceDescription>
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircle />
          <ServiceTitle>Service 2</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceDivider />
          <ServiceDescription>Jenna Smith</ServiceDescription>
        </ServiceSquare>
        <ServiceSquare>
          <ServiceCircle />
          <ServiceTitle>Service 3</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ServiceDescription>
          <ServiceDivider />
          <ServiceDescription>Samuel Stevens</ServiceDescription>
        </ServiceSquare>
      </ServiceContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;
