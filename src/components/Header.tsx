import React from "react";
import styled from "styled-components";
import viteLogo from "/vite.svg"; // Make sure to adjust the path to your logo

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fefafa; 
  color: #fff;
`;

const Logo = styled.img`
  height: 50px; // Adjust the size as needed
  margin-right: 10px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  padding: 0 1em;
`;

const HireButton = styled.button`
  background-color: #ec5b53;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header: React.FC = () => {
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
      <HireButton>Hire Me</HireButton>
    </HeaderContainer>
  );
};

export default Header;
