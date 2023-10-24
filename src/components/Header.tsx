import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import viteLogo from "/vite.svg"; // Adjust the path to your logo
import { MainButton1 } from "./style/Landing.styled";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #fefafa;
  color: #2b161b; // Adjust text color
`;

const Logo = styled.img`
  height: 50px; // Adjust the size as needed
  margin-right: 10px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Hide the navigation items on smaller screens
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #2b161b;
  font-weight: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  padding: 0 1em;
`;

const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block; /* Show the button on smaller screens */
    position: absolute;
    right: 10px;
  }
`;

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <div>
        <Logo src={viteLogo} alt="Vite Logo" />
      </div>
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Contact</NavItem>
      </Navigation>
      <MobileMenuButton>
        <IconButton
          aria-controls="mobile-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </MobileMenuButton>
      <MainButton1>Hire Me</MainButton1>
    </HeaderContainer>
  );
};

export default Header;
