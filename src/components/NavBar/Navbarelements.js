import styled from "@emotion/styled";
import { styled as mystyle, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// export const AppBarStyles = styled(AppBar)`
//   //aqui empiezas a cambiar estilos en el componente de mui
//   //recuerda que un componente de mui tiene hijos, div, span o lo que sea
//   // tienes que ganarle en especificidad para poder aplicarle los estilos correctos
//   //utiliza las clases css de mui para ayudarte a ganar en especificidad
//   //puedes mirar ejemplos que hayan en mui de componentes estilados
//   //dandole en el boton de sandbox que te manda a una nueva página con un ejemplo de código
// `;

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #141a32;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  width: 70%;

  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.8rem;
      font-weight: 500;
      color: #e07924;
    }
  }
`;
export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  z-index: 1;

  @media (max-width: 768px) {
    background-color: #23394d;
    position: absolute;
    top: 49px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;
export const MenuItem = styled.li`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;
export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #e0792a;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #64b2ff;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    div {
      width: auto;

      svg {
        display: flex;
      }
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 4px;
  padding: 0.25rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #e0792ad8;
  position: relative;
  width: 6rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(100, 178, 255, 0.7);
    background-color: #64b1ff23;
  }

  &::placeholder {
    color: #64b2ff;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

/*Barra de busqueda*/
export const Search = mystyle("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  borderRadius: "50px",
  style: {
    height: "60%", // Agregar estilos en línea
  },
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
}));

export const SearchIconWrapper = mystyle("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = mystyle(InputBase)(({ theme }) => ({
  color: "inherit",
  //"& div.MuiInputBase-root": { height: "60%" },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `10px`,
    // "@media (min-width: 960px)": {
    //   StyledInputBase: {
    //     paddingLeft: "5px",
    //   },
    // },
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
