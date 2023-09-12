import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import { MovieContext } from "../../MovieContext";

import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";

import { Drawer, IconButton } from "@mui/material";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import {
  LogoContainer,
  Search,
  SearchIconWrapper,
  StyleBox,
  StyleBoxMenu,
  StyleToolbar,
  StyledInputBase,
} from "./AppbarStyles";
import NavListDrawer from "./Drawer";
import { NavLink } from "react-router-dom";

export const SearchAppBar = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  /* const context = {hola: 'hola', adios: 'adios'}
   //ando en otra pag
   const {hola} = context 
  console.log(hola=> 'hola')
  */
  const {
    setLoadingGetMovies,
    handleSetMoviesByInput,
    //loadingGetMovies,
  } = useContext(MovieContext);

  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/Inicio",
      icon: <HomeIcon sx={{ color: orange[500] }} />,
    },
    {
      title: "Favoritas",
      path: "/Favoritas",
      icon: <FavoriteIcon sx={{ color: orange[500] }} />,
    },
  ];

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchWithDelay();
      setOpen(false);
    }
  };

  const handleSearchWithDelay = async () => {
    await handleSetMoviesByInput(query);
    setLoadingGetMovies(false);
  };

  const handleReloadPage = () => {
    // Recargar la página actual
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static">
        <StyleToolbar>
          <StyleBoxMenu>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "#008cff" }} />
            </IconButton>
          </StyleBoxMenu>
          <LogoContainer onClick={handleReloadPage}>
            <LocalMoviesTwoToneIcon
              sx={{
                color: "orange",
                fontSize: "2rem",
                mr: "0.5rem",
                flexGrow: 1,
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              Movie{" "}
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: "orange" }}
              >
                Max
              </Typography>
            </Typography>
          </LogoContainer>
          <StyleBox>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </StyleBox>
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
        <NavListDrawer
          handleSetMoviesByInput={handleSetMoviesByInput}
          setLoadingGetMovies={setLoadingGetMovies}
          navArrayLinks={navArrayLinks}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </Drawer>
    </>
  );
};
