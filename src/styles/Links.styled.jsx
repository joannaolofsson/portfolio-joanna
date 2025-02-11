import styled from "styled-components";
import { Link } from "react-router-dom";

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
        transform: translateY(4px);
    }

    &:focus-within {
        outline: 3px solid #9FBDBC;
        outline-offset: 0.6rem;
    }
`;


export const StyledLogoLink = styled(Link)`
    min-height: 8rem;
    text-decoration: none;
    display: block;
    padding: 1em;
    


    &:hover {
        border-bottom: 5px solid #F6CAC9;
    }

    &:focus-within {
        outline: 3px solid #9FBDBC;
        outline-offset: .2rem;
    }
`;

export const StyledMenuLink  = styled(Link)`
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


export const ContactLink = styled(Link)`
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
`;

/* Link to cards */
export const StyledCardLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


/* Animerad pil */
export const StyledArrowLink = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
padding: 1rem;


&:hover {
background-color: #F6CAC9;
transform: scale(0.98);
border-radius: 1rem;
}

&:focus-within {
outline: 3px solid #9FBDBC;
outline-offset: .6rem;
border-radius: 0.5rem;
}
`;






