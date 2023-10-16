import React from "react";
import styled from "styled-components";
import viteLogo from "/vite.svg"; // Make sure to adjust the path to your logo
import { MainButton1 } from "./style/Landing.styled";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background-color: #fefafa; 
  color: #fff;
  padding-top: 15px;
  padding-right: 30px;
  padding-bottom: 15px;
  padding-left: 30px;
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
  color: #2B161B;
  font-weight: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  padding: 0 1em;
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
      <MainButton1>Hire Me</MainButton1>
    </HeaderContainer>
  );
};

export default Header;
