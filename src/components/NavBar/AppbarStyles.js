import styled from "@emotion/styled";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { Toolbar } from "@mui/material";
import InputBase from "@mui/material/InputBase";

export const StyleToolbar = styled(Toolbar)`
  background-color: #141a32;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 100%;

  /* Aplica margin-right: auto; al primer elemento */
  & > :first-child {
    margin-right: auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: auto; /* Alinea este contenedor a la izquierda */
`;

export const StyleBox = styled(Box)`
  display: flex;
  justify-content: flex-end; /* Alinea los elementos a la derecha */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyleBoxMenu = styled(Box)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyleBoxDrawer = styled(Box)`
  width: 250px;
  color: white;
  height: 100%;
  background-color: #18224a;

  &:hover {
    color: #008cff;
  }
`;

export const Search = muiStyled("div")(({ theme }) => {
  console.log(theme);
  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    "@media (max-width: 600px)": {
      maxWidth: "150px",
    },
  };
});

export const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
