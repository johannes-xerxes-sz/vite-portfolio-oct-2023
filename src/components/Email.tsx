import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription, DividerTitle } from "./style/Landing.styled";

const EmailContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #eeeeee;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px; /* Limit the maximum input width for better readability */
  }
`;

const SubscribeButton = styled.button`
  background-color: #ec5b53;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding-top: 15px;
  padding-right: 30px;
  padding-bottom: 15px;
  padding-left: 30px;
  line-height: 1em;

  @media (max-width: 768px) {
    // position: absolute; /* Relative positioning for default display */
    margin: 10px;
  }
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
      <SubscribeButton>Subscribe</SubscribeButton>
    </EmailContainer>
  );
};

export default Email;
