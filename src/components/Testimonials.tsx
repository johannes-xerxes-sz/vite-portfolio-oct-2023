import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const TestimonialsContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <SectionTitle>Testimonials Experience</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
    </TestimonialsContainer>
  );
};

export default Testimonials;
