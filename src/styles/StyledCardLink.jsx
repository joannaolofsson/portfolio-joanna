import styled from "styled-components";
import {
    Link,
  } from "react-router-dom";

export const StyledCardLink = styled(Link)`
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
opacity: 0.9;
transform: scale(0.98);
}
`;