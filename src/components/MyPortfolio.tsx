import React, { useState } from "react";
import styled from "styled-components";
import { SectionTitle, SectionDescription } from "./style/Landing.styled";

const PortfolioContainer = styled.div`
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

const ImageCarousel = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const CarouselSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
`;

const PreviousButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const images = [
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-3.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-2.png",
  "https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/portfolio-1.png",
  // Add more image URLs here for your carousel
];

const Portfolio: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPreviousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <PortfolioContainer>
      <SectionTitle>My Portfolio</SectionTitle>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </SectionDescription>
      <DividerTitle />
      <ImageCarousel>
        <CarouselSlide
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <CarouselImage key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </CarouselSlide>
        <PreviousButton onClick={goToPreviousImage}>{"<"}</PreviousButton>
        <NextButton onClick={goToNextImage}>{">"}</NextButton>
      </ImageCarousel>
    </PortfolioContainer>
  );
};

export default Portfolio;
