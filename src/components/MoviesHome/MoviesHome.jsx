import React, { useEffect, useState } from "react";
import { MovieBox } from "./MovieBox";
import axios from "axios";
import { MainContainer } from "./MoviesHomeElements";

//const API_KEY = process.env.REACT_APP_API_KEY;
//const API_BASE = process.env.REACT_APP_API_URL;
//const API_TOP_RATED_MOVIES_URL = `${API_BASE}movie/top_rated?api_key=${API_KEY}&language=es-US&page=1`;

export const MoviesHome = ({ movies }) => {
  return (
    <MainContainer>
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
    </MainContainer>
  );
};
