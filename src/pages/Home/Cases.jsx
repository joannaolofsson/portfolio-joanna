import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledP, StyledH3 } from "../../styles/Fonts.styled";

function Cases({ item: { id, linkTo, title, body, image }, backgroundColor }) {
    return (
        <StyledCard backgroundColor={backgroundColor}>
            <StyledCardLink to={linkTo}>
                <GridContainer>
                    <GridItem><StyledH3>{title}</StyledH3></GridItem>
                    <GridItem><StyledP>{body}</StyledP></GridItem>
                    <GridItem> <CardImage src={image} alt="case images" /> </GridItem>
                </GridContainer>
            </StyledCardLink>
        </StyledCard>
    );
}

export default Cases;

export const StyledCard = styled.div`
    max-width: 100vw;
    background-color: ${({ backgroundColor }) => backgroundColor || "#E2E4E8"};
    border-radius: 1rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.15);
    margin: 2rem;
    overflow: hidden;
`;

export const StyledCardLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 3rem;
    margin: 0 auto;
`;

export const GridItem = styled.li`
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
        padding: 0 20px 20px 0;
    }
`;

export const CardImage = styled.img`
    width: 90%;
`;