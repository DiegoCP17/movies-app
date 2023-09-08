import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Wrapper,
  ContainerIcon,
} from "./Navbarelements";

import MovieSearch from "../SearchMovies/SearchMovie";

import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";

const CustomIcon = ({ icon: IconComponent, label, showInScreen }) => (
  <ContainerIcon showInScreen={showInScreen}>
    <IconComponent
      sx={{ color: "warning.main", fontSize: "1.8rem", mr: "0.5rem" }}
    />
    {label}
  </ContainerIcon>
);

export const Navbar = ({
  handleSetMoviesByInput,
  setLoadingGetMovies,
  loadingGetMovies,
}) => {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <LocalMoviesTwoToneIcon
            sx={{ color: "warning.main", fontSize: "2rem", mr: "0.5rem" }}
          />
          <p>Movies -</p>
          <p>Max</p>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!ShowMobileMenu)}>
          {ShowMobileMenu ? (
            <CloseIcon
              sx={{ color: "warning.main", fontSize: "2rem", mr: "1.5rem" }}
            />
          ) : (
            <MenuTwoToneIcon
              sx={{ color: "warning.main", fontSize: "2rem", mr: "1.5rem" }}
            />
          )}
        </MobileIcon>
        <Menu open={isMobile ? ShowMobileMenu : true}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!ShowMobileMenu)}>
              <MobileIcon>
                <CustomIcon
                  icon={HomeTwoToneIcon}
                  label="INICIO"
                />
              </MobileIcon>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!ShowMobileMenu)}>
              <MobileIcon>
                <CustomIcon
                  icon={LiveTvTwoToneIcon}
                  label="TOP 10"
                />
              </MobileIcon>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!ShowMobileMenu)}>
              <MobileIcon>
                <CustomIcon
                  icon={FavoriteTwoToneIcon}
                  label="FAVORITAS"
                />
              </MobileIcon>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              <MobileIcon>
                <CustomIcon
                  icon={SearchIcon}
                  showInScreen="mobile"
                />
              </MobileIcon>
              <MovieSearch
                handleSetMoviesByInput={handleSetMoviesByInput}
                setLoadingGetMovies={setLoadingGetMovies}
                loadingGetMovies={loadingGetMovies}
                inputProps={{
                  
                }}
              />
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};
