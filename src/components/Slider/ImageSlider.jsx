import React, { useState } from "react";
import {
  Container,
  SlideContainer,
  RightArrowStyles,
  LeftArrowStyles,
  DotsContainerStyles,
  DotStyles,
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
      <LeftArrowStyles onClick={gotoPrevious}>🢀</LeftArrowStyles>
      <RightArrowStyles onClick={gotoNext}>🢂</RightArrowStyles>
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
