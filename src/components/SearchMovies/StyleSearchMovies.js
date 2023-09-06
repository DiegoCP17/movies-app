import styled from "@emotion/styled";
import { TextField, Button, Container } from "@mui/material";

export const StyledContainer = styled(Container)`
  border: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  flex: 25%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 8px;

  img {
    width: 100%;
    height: auto;
  }
`;

/*Buscador */

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledTextField = styled(TextField)`
  margin-right: 10px;
  width: 200px;
  
`;

export const StyledButton = styled(Button)`
  height: 50px;
`;
