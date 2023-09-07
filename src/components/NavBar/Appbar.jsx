import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Agregamos el ícono de cierre
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { Container, Drawer, IconButton, Toolbar } from "@mui/material";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import {
  Search,
  SearchIconWrapper,
  StyleToolbar,
  StyledInputBase,
  StyledMenuButton,
} from "./AppbarStyles";
import NavListDrawer from "./Drawer";

// const navItems = ["Inicio", "Favoritas"];

export const SearchAppBar = ({
  handleSetMoviesByInput,
  setLoadingGetMovies,
  loadingGetMovies,
}) => {
  const [query, setQuery] = useState("");
  // const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchWithDelay();
    }
  };

  const handleSearchWithDelay = async () => {
    await handleSetMoviesByInput(query);
    setLoadingGetMovies(false);
  };

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <>
      <AppBar position="static">
        <StyleToolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <LocalMoviesTwoToneIcon
            sx={{ color: "orange", fontSize: "2rem", mr: "0.5rem" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Movie -{" "}
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: "inline", color: "orange" }}
            >
              Max
            </Typography>
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Favoritas</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "orange" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar pelís..."
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </StyleToolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavListDrawer onClick={() => setOpen(false)} />
      </Drawer>
    </>

    ////////////////////////////////////////////////////////////////
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="absolute">
    //     <StyleToolbar>
    //       <StyledMenuButton
    //         showInScreen="mobile"
    //         onClick={toggleMenu}
    //       >
    //         {menuOpen ? <CloseIcon /> : <MenuIcon />}
    //       </StyledMenuButton>
    //       <LocalMoviesTwoToneIcon
    //         sx={{ color: "warning.main", fontSize: "2rem", mr: "0.5rem" }}
    //       />
    //       <Typography
    //         variant="h6"
    //         component="div"
    //         sx={{
    //           flexGrow: 1,
    //           display: { xs: "none", sm: "block" },
    //         }}
    //       >
    //         Movie -{" "}
    //         <Typography
    //           variant="h5"
    //           component="div"
    //           sx={{ flexGrow: 1, display: "inline", color: "warning.main" }}
    //         >
    //           Max
    //         </Typography>
    //       </Typography>
    //       <Box
    //         sx={{
    //           display: {
    //             xs: menuOpen ? "none" : "block", // Mostrar el menú solo cuando está abierto
    //             sm: "block",
    //           },
    //         }}
    //       >
    //         <List>
    //           {navItems.map((item) => (
    //             <Button
    //               key={item}
    //               sx={{ color: "#fff" }}
    //             >
    //               {item}
    //             </Button>
    //           ))}
    //         </List>
    //       </Box>
    // <Search>
    //   <SearchIconWrapper>
    //     <SearchIcon />
    //   </SearchIconWrapper>
    //   <StyledInputBase
    //     placeholder="Buscar pelís..."
    //     value={query}
    //     onChange={handleInputChange}
    //     onKeyDown={handleKeyPress}
    //     inputProps={{ "aria-label": "search" }}
    //   />
    // </Search>
    //     </StyleToolbar>
    //   </AppBar>
    // </Box>
  );
};
