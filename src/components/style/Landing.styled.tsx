import styled from "styled-components";

export const SectionTitle = styled.h3`
font-size: 40px;
font-family: "Playfair Display", serif;
color: #002d5b; /* Adjust the color as needed */
margin: 10px auto;
`; 

export const SectionDescription = styled.p`
  font-size: 16px;
  color: #666; /* Adjust the color as needed */
  margin: 20px auto;
  max-width: 500px;
`;

export const MainButton1 = styled.button`
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
    position: absolute; /* Relative positioning for default display */
    left: 100px;
    margin: 10px;
  }
`;

export const DividerTitle = styled.hr`
  width: 7%;
  margin: 20px auto;
  border: 1px solid #ec5b53;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const ColorContainer = styled.div`
  background-color: #fefafa;
  padding: 15px 100px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const WhiteContainer = styled.div`
  background-color: white;
  padding: 15px 100px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const FooterContainer = styled.div`
  background-color: #002d5b;
  padding: 15px;
`;
