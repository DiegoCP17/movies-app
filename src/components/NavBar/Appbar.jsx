import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


import Button from "@mui/material/Button";
import { Drawer, IconButton } from "@mui/material";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import {
  Search,
  SearchIconWrapper,
  StyleBox,
  StyleBoxMenu,
  StyleToolbar,
  StyledInputBase,
} from "./AppbarStyles";
import NavListDrawer from "./Drawer";
import { NavLink } from "react-router-dom";



export const SearchAppBar = ({
  navArrayLinks,
  handleSetMoviesByInput,
  setLoadingGetMovies,
  loadingGetMovies,
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

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
