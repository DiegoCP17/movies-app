import { useContext } from "react";
import { MovieBox } from "./MovieBox";
import { MovieContext } from "../../MovieContext";

import { MainContainer } from "./MoviesHomeElements";

export const MoviesHome = () => {
  const { movies } = useContext(MovieContext);
  return (
    <MainContainer>
      {movies.map((movieReq) => (
        <MovieBox
          key={movieReq.id}
          {...movieReq}
        />
      ))}
    </MainContainer>
  );
};
