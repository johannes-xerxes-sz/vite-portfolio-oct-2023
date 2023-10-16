import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

const Divider = styled.hr`
  width: 5%;
  margin: 20px auto;
  margin-left: 20px; /* Add margin to the right */
  border: 1px solid #ec5b53; /* Divider line style */
`;
const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53; /* Divider line style */
  margin-bottom: 50px;
`;

const LeftSide = styled.div`
  text-align: left; /* Align text to the left for the left side */
`;

const Subtitle = styled.h4`
  font-size: 24px;
  font-family: "Playfair Display", serif;
  color: #002d5b; /* Adjust the color as needed */
  margin: 10px 0; /* Remove margin: auto */
  max-width: 400px; /* Set a maximum width for the text to wrap */
`;

const DualDescriptions = styled.p`
  text-align: left;
  font-size: 16px;
  color: #666; /* Adjust the color as needed */
  margin: 20px auto;
  max-width: 200px; /* Set a maximum width for the text to wrap */
`;

// const LeftDescription = styled.p`
//   flex: 1;
//   margin: 10px;
// `;

// const RightDescription = styled.p`
//   flex: 1;
//   margin: 10px;
// `;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Me</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <LeftSide>
        <Subtitle>
          Developing With a Passion While Exploring The World.
        </Subtitle>
        <Divider />
        <DualDescriptions>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </DualDescriptions>
      </LeftSide>
    </AboutContainer>
  );
};

export default About;
