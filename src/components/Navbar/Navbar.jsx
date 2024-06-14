import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import Logo from '../../assets/logotype.svg';
import { FaLinkedin } from "react-icons/fa";

export const StyledNav = styled.nav`
    width: 100%;
    min-height: 5vh;
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
    }
`;

export const StyledLink = styled(Link)`
    color: black;
    font-size: 1.2rem;
    text-decoration: none;
`;

const links = [
   
    {
        id: 1,
        to: "/#cases",
        text: "Cases",
    },
    {
        id: 2,
        to: "/about",
        text: "About me",
    },
    {
        id: 3,
        to: "/resume",
        text: "Resume",
    }
];

const StyledImg = styled.img`
@media(max-width: ${({theme}) => theme.mobile }) {
    margin-left: 10px;
}
`;

const Navbar = () => {
            const handleIconClick = () => {
            window.open('https://www.linkedin.com/in/joannaolofsson/', '_blank');

        }
    return (
    
        
        <>

            <StyledNav>
            <StyledLink to="/">
            <StyledImg src={Logo} alt='Logo' /> 
            </StyledLink>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            <StyledLinkedIn onClick={handleIconClick} style={{ cursor: 'pointer' }}>
            <FaLinkedin size={24}/>
            </StyledLinkedIn>    
            </StyledNav>
        </>
    );
}

export default Navbar;

const StyledLinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledResumeLink = styled(Link)`
text-decoration: none;
font-size: 1.2rem;
color: black;
`;