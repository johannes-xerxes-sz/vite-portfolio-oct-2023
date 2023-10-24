import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription, MainButton1 } from "./style/Landing.styled";

const EmailContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #EEEEEE;
`;

const Email: React.FC = () => {
  return (
    <EmailContainer>
      <SectionTitle>Stay In Touch</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </SectionDescription>
      <DividerTitle />
      <EmailInput placeholder="Enter Email Address" />
      <MainButton1>Subscribe</MainButton1>
    </EmailContainer>
  );
};

export default Email;
