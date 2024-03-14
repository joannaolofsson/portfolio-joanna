import React from "react";
import styled from "styled-components";
import { HashLink as Link} from "react-router-hash-link";


export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 12px 30px;
background-color: ${({bg}) => bg  || '#fff'};
color: ${({color}) => color || '#333'};

&:hover {
background-color: #f6f9f7;
transform: scale(0.98);
}
`;


