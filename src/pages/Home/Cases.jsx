import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledP, StyledH3 } from "../../styles/Fonts.styled";

function Cases({ item: { id, linkTo, title, body, image }, backgroundColor }) {
    return (
        <StyledCard backgroundColor={backgroundColor}>
            <StyledCardLink to={linkTo} tabIndex="0">
                <GridContainer>
                    <GridItem1>
                    <StyledH3>{title}</StyledH3>
                    <StyledP>{body}</StyledP></GridItem1>
                    <GridItem2> <CardImage src={image} alt="case images" /> </GridItem2>
                </GridContainer>
            </StyledCardLink>
        </StyledCard>
    );
}

export default Cases;

const StyledCard = styled.div`
    max-width: 100vw;
    background-color: #fff;
    border-radius: 0.5rem;
    margin: 1.5em;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.15);
    }
`;

export const StyledCardLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


export const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: 1fr, 1fr 1fr;
    gap: 1rem;
    list-style-type: none;
    padding: 2rem;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr, 1fr, 1fr;
        padding: 2rem;


    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
`;


export const GridItem1 = styled.li`
    grid-area: 1 / 1 / 2 / 2;

    p {
        padding: 1em 0 1em 0;
    }


    @media screen and (min-width: 600px) {
        grid-area: 1 / 1 / 2 / 3;
        align-self: center;
        justify-self: flex-start;

        p {
        padding: 1em 0 1em 0;
        }

    }

    @media screen and (min-width: 768px) {
        grid-area: 1 / 1 / 2 / 2;
        align-self: center;
        justify-self: center;

        p {
        padding: 1em 0 0 0;
        }
    }
`;

export const GridItem2 = styled.li`

    grid-area: 2 / 1 / 3 / 2;



    @media screen and (min-width: 600px) {
        grid-area: 2 / 1 / 3 / 2;
        align-self: center;
        justify-self: flex-start;

    }

    @media screen and (min-width: 768px) {
        grid-area: 1 / 2 / 2 / 3;
        align-self: flex-end;
        justify-self: center;
    }
`;

export const CardImage = styled.img`
    width: 100%;
`;