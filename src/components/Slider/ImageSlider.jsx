import React, { useState } from "react";
import {
  Container,
  SlideContainer,
  DotsContainerStyles,
  DotStyles,
  StyledArrowForwardIosIcon,
  StyledArrowBackIosIcon,
} from "./ImageSliderElements";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () => {
    const isFirtSlide = currentIndex === 0;
    const newIndex = isFirtSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Container>
      <StyledArrowBackIosIcon onClick={gotoPrevious}>🢀</StyledArrowBackIosIcon>
      <StyledArrowForwardIosIcon onClick={gotoNext}>
        🢂
      </StyledArrowForwardIosIcon>
      <SlideContainer imageUrl={slides[currentIndex]} />
      <DotsContainerStyles>
        {slides.map((_, slideIndex) => (
          <DotStyles
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}
          >
            •
          </DotStyles>
        ))}
      </DotsContainerStyles>
    </Container>
  );
};
