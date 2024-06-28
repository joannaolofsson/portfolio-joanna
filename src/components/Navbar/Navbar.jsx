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
@media screen and  (min-width: 600px) {
    margin-left: 10px;
}
`;

export const StyledNav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
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
    min-height: 8rem;
    color: black;
    font-size: 1.25rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    


    &:hover {
        border-bottom: 5px solid #F6CAC9;
        -webkit-transform: translateY(0px);
        transform: translateY(3px);
    }

    &:focus-within {
        outline: 3px solid #9FBDBC;
        outline-offset: .2rem;
    }
`;
    

export const StyledLink = styled(Link)`
    width: 140px;
    color: black;
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.5rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Prompt", sans-serif;

    &:hover {
        border-bottom: 5px solid #F6CAC9;
        -webkit-transform: translateY(0px);
        transform: translateY(6px);

    }

    &:focus-within {
        outline: 3px solid #9FBDBC;
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