import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Search,
  SearchIconWrapper,
  StyleBoxDrawer,
  StyledInputBase,
} from "./AppbarStyles";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { orange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

export default function NavListDrawer({
  navArrayLinks,
  onClick,
  handleSetMoviesByInput,
  setLoadingGetMovies,
  isOpen,
  onClose,
}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      await handleSearchWithDelay();
      onClose(); // Cierra el drawer cuando presionas Enter
    }
  };

  const handleSearchWithDelay = async () => {
    await handleSetMoviesByInput(query);
    setLoadingGetMovies(false);
  };

  return (
    <StyleBoxDrawer onClick={onClick}>
      <nav aria-label="main Inicio Favoritas">
        <List>
          {navArrayLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={(e) => {
                  e.stopPropagation(); // Detiene la propagación del evento
                  onClose(); // Cierra el drawer al hacer clic en un botón
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary Input Search">
        <List>
          <ListItem disablePadding>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: orange[500] }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar pelís..."
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                inputProps={{ "aria-label": "search" }}
                onClick={(e) => e.stopPropagation()}
              />
            </Search>
          </ListItem>
        </List>
      </nav>
    </StyleBoxDrawer>
  );
}
