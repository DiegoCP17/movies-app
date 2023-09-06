import { MovieBox } from "./MovieBox";

import { MainContainer } from "./MoviesHomeElements";

export const MoviesHome = ({ movies }) => {
  return (
    <MainContainer>
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
    </MainContainer>
  );
};
