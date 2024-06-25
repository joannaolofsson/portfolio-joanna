import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import Logo from '../../assets/logotype.svg';
import { FaLinkedin } from "react-icons/fa";



const links = [
   
    {
        id: 1,
        to: "/casepage",
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



const Navbar = () => {
            const handleIconClick = () => {
            window.open('https://www.linkedin.com/in/joannaolofsson/', '_blank');
        }
    return (
    
        
        <>  
            <StyledNav>
            <StyledLogoLink to="/">
            <StyledImg src={Logo} alt='Logo' /> 
            </StyledLogoLink>

            <StyledLinkwrapper>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            <StyledLinkedIn onClick={handleIconClick} style={{ cursor: 'pointer' }}>
            <FaLinkedin size={32}/>
            </StyledLinkedIn>  
            </StyledLinkwrapper>  
            </StyledNav>
        </>
    );
}

export default Navbar;

const StyledImg = styled.img`
@media(max-width: ${({theme}) => theme.mobile }) {
    margin-left: 10px;
}
`;

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

const StyledLinkwrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledLogoLink = styled(Link)`
    color: black;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem;

    &:hover {
        background-color: #e6e6e6;
        border-radius: 1rem;
    }

    &:focus-within {
        outline: 3px solid purple;
        outline-offset: .6rem;
    }
`;
    

export const StyledLink = styled(Link)`
    color: black;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    padding: 1rem 1rem 0 1rem;
    margin: 1rem;

    &:hover {
        border-bottom: 5px solid #ebd1eb;

    }

    &:focus-within {
        outline: 3px solid purple;
        outline-offset: .6rem;
    }
`;

const StyledLinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #ebd1eb;
  }
`;