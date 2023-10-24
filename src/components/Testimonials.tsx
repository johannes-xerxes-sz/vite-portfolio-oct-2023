import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionDescription,
  DividerTitle,
} from "./style/Landing.styled";
import { FormatQuote } from "@mui/icons-material";

const TestimonialsContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fefafa;
`;

const ClientDivider = styled.hr`
  width: 15%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;
`;

const ClientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow client boxes to wrap on smaller screens */
    justify-content: center; /* Center the client boxes */
  }
`;

const ClientSquare = styled.div`
  width: 80%; /* Adjust width for better responsiveness */
  background-color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px 20px; /* Add spacing between squares */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
`;

const ClientCircleA = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #ec5b53; /* Add a 2px solid border with color #ec5b53 */
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/male-3.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

const ClientCircleB = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #ec5b53; /* Add a 2px solid border with color #ec5b53 */
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/female-3-150x150.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

const ClientCircleC = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #ec5b53; /* Add a 2px solid border with color #ec5b53 */
  background-image: url("https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/male-1.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
`;

const HeaderFormatQuote = styled(FormatQuote)`
  border-radius: 50%;
  margin: 20px auto;
  color: #ec5b53;
  transform: scale(2.3);
`;

const ClientTitle = styled.h3`
  font-size: 24px;
  color: #002d5b;
  margin: 20px 0;
`;

const ClientDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <SectionTitle>What My Clients Say</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ClientContainer>
        <ClientSquare>
          <HeaderFormatQuote />
          <ClientCircleA />
          <ClientTitle>Client 1</ClientTitle>
          <ClientDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ClientDescription>
          <ClientDivider />
          <ClientDescription>John Doe</ClientDescription>
        </ClientSquare>
        <ClientSquare>
          <HeaderFormatQuote />
          <ClientCircleB />
          <ClientTitle>Client 2</ClientTitle>
          <ClientDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ClientDescription>
          <ClientDivider />
          <ClientDescription>John Doe</ClientDescription>
        </ClientSquare>
        <ClientSquare>
          <HeaderFormatQuote />
          <ClientCircleC />
          <ClientTitle>Client 3</ClientTitle>
          <ClientDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </ClientDescription>
          <ClientDivider />
          <ClientDescription>John Doe</ClientDescription>
        </ClientSquare>
      </ClientContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;
