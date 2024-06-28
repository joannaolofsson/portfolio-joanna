import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const Menu = ({handleNavToggle}) => {
  const handleIconClick = () => {
    window.open('https://www.linkedin.com/in/joannaolofsson/', '_blank');
  }
  

    return(
        <StyledMenu handleNavToggle={handleNavToggle}>
            <StyledMenuLink to="/" onClick={handleNavToggle}>Home</StyledMenuLink>
            <StyledMenuLink to="/casepage" onClick={handleNavToggle}>Cases</StyledMenuLink>
            <StyledMenuLink to="/about" onClick={handleNavToggle}>About</StyledMenuLink>
            <StyledMenuLink to="/resume" onClick={handleNavToggle}>Resume</StyledMenuLink>
            <StyledMenuLink onClick={handleIconClick} style={{ cursor: 'pointer' }}>
            <FaLinkedin size={32}/>
            </StyledMenuLink>  
            <CloseToggle onClick={handleNavToggle}/>
        </StyledMenu>
    )
}

export default Menu;

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and(max-width: ${({theme}) => theme.mobile }) {
    width: 100%;
  }
`;

const StyledMenuLink  = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    transition: .2s all ease-in-out;
    font-family: "Syne", sans-serif;

    user-select: none; 
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
        transition: 0.2s all ease-in-out;
        color: #EE7925;
    }
`;

const CloseToggle = styled(FaTimes)`
  position: Fixed;
  top: 4%;
  right: 4%;
  background-color: #ffffff;
  color: #bc64bc;
  padding: 0.6rem;
  border-radius: 20%;
  border: 2px solid #dadada;
  display: flex;
  place-items: center;
  font-size: 3rem;
  cursor: pointer;
`;