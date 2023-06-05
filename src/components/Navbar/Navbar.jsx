import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

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
        to: '/resume',
        text: "Resume",
    },

    {
        id: 4,
        to: "/contact",
        text: "Contact",
    },
];

export const Logo = styled.img`
@media(max-width: ${({theme}) => theme.mobile }) {
    margin-left: 10px;
}
`;

const Navbar = () => {
    return (
        <>

            <StyledNav>
            <StyledLink to="/">
            <Logo src='../src/assets/logotype.svg' alt='Logo' /> 
            </StyledLink>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledNav>
        </>
    );
}

export default Navbar;

