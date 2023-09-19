import styled from "styled-components";
import { Modal, Paper } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Button from "@mui/material/Button";

export const Card = styled.div`
  margin: 0px 20px 20px 20px;
  width: calc(25% - 50px);
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  vertical-align: top;
  transition: transform 0.2s ease-in-out;
  padding-top: 25px;

  img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  & svg.MuiSvgIcon-root {
    display: none;
  }

  &:hover {
    transform: scale(1.05); /* Efecto de escala al pasar el ratón */
    svg.MuiSvgIcon-root {
      display: inline-block;
    }
  }
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  background-color: rgba(8, 15, 40, 0.7);
  justify-content: center;

  & div.MuiStack-root {
    color: #f9f9ee;
  }
`;

export const StyledPaper = styled(Paper)`
  &.MuiPaper-root {
    background-color: rgba(8, 15, 40, 0.7);
  }

  padding: 2rem;
  max-width: 50vw;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

export const StylePlayCircleOutlineIcon = styled(PlayCircleOutlineIcon)`
  color: #f9f9ee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyleButton = styled(Button)`
  cursor: not-allowed;
  pointer-events: none;
  position: absolute;
  bottom: 8%;
  left: 35%;

  @media (max-width: 768px) {
    font-size: 6px;
    padding: 8px 16px;
  }
`;
