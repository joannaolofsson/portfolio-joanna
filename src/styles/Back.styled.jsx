import React from "react";
import styled from "styled-components";
import { FaArrowLeft} from "react-icons/fa";

export const StyledBack = styled.div`
max-width: 100px;
text-decoration: none;
border: none;
font-size: 16px;
font-weight: 700;
&:hover {
    color: #EE7925;
}
`;

export const StyledBackArrow = styled(FaArrowLeft)`
    margin: .5rem .2rem 0 .6rem;

`;
