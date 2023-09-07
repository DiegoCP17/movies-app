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
  StyleToolbar,
  StyledInputBase,
  StyledMenuButton,
} from "./AppbarStyles";

import { Box } from "@mui/system";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";
import { orange } from "@mui/material/colors";

export default function NavListDrawer({
  onClick,
  handleSetMoviesByInput,
  setLoadingGetMovies,
}) {
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
    <Box
      sx={{ width: 250, bgcolor: "#18224a", color: "white" }}
      onClick={onClick}
      color={"inherit"}
    >
      <nav aria-label="main Inicio Favoritas">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: orange[500] }} />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: orange[500] }} />
              </ListItemIcon>
              <ListItemText primary="Favoritas" />
            </ListItemButton>
          </ListItem>
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
              />
            </Search>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
