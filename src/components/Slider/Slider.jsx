import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageSlider } from "./ImageSlider";
import { SliderContainer } from "./SliderElements";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_API_URL;
const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-US&page=1`;

export const Slider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const imageUrls = movies.map(
    (movie) => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  );

  return (
    <SliderContainer>
      <ImageSlider slides={imageUrls} />
    </SliderContainer>
  );
};
