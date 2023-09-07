import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import {
  Search,
  SearchIconWrapper,
  StyleToolbar,
  StyledInputBase,
} from "./AppbarStyles";

const navItems = ["Inicio", "Favoritas"];

export const SearchAppBar = ({
  handleSetMoviesByInput,
  setLoadingGetMovies,
  loadingGetMovies,
}) => {
  const [query, setQuery] = useState("");

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <StyleToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <LocalMoviesTwoToneIcon
            sx={{ color: "warning.main", fontSize: "2rem", mr: "0.5rem" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Movie -{" "}
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: "inline" }}
            >
              Max
            </Typography>
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <List>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                >
                  {item}
                </Button>
              ))}
            </List>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
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
    </Box>
  );
};
