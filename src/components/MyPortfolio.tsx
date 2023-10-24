import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription, DividerTitle } from "./style/Landing.styled";

const PortfolioContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fefafa;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto; /* Add horizontal scrolling if needed */
`;

const CarouselImage = styled.img`
  width: auto;
  max-height: 200px; /* Adjust the max height as needed */
  margin-right: 20px; /* Add spacing between images */
`;

const images = [
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-3.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-2.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-6-1.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-4.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-7-1.png",
  // Add more image URLs here for your carousel
];

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <SectionTitle>My Portfolio</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ImageContainer>
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image}
            alt={`Portfolio Image ${index}`}
          />
        ))}
      </ImageContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
