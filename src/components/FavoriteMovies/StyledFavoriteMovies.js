import styled from "@emotion/styled";
import { Card, Button, Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #080f28;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

export const MovieCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 16px;
  width: calc(25% - 32px);
  flex-grow: 1;
  max-width: 400px;
`;

export const DeleteButton = styled(Button)`
  && {
    font-size: 12px;
    padding: 4px 8px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 5px;
  }
`;

export const TitleTypography = styled(Typography)`
  && {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;
