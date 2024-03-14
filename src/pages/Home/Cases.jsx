import styled from "styled-components";
import { StyledCard } from "../../styles/Card.styled";
import { StyledLink } from "../../styles/Link.styled";
import { StyledP, StyledH2 } from "../../styles/Fonts.styled";

function Cases({item: {id, linkTo, title, body, image, }}) {
    return(
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
                <div>
                    <StyledH2>{title}</StyledH2>
                    <StyledP>{body}</StyledP>
                    <StyledLink smooth to={linkTo}>More</StyledLink>
                </div>
                <div>
                    <CardImage src={image} alt="case images"/>       
                </div>
        </StyledCard>
    );
}

export default Cases;

export const CardImage = styled.img`
    width: 100%;
    
    @media(max-width: ${({theme}) => theme.mobile }) {
    margin: 40px 0 30px;
    }
`;