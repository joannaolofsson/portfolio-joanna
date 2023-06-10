import styled from "styled-components";
import { StyledCard } from "../../styles/Card.styled";
import { StyledLink } from "../../styles/Link.styled";

export const CardImage = styled.img`
    width: 100%;
    @media(max-width: ${({theme}) => theme.mobile }) {
    margin: 40px 0 30px;
    }
`;

function Cases({item: {id, linkTo, title, body, image, }}) {
    return(
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
                <div>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <StyledLink smooth to={linkTo}>More</StyledLink>
                </div>
                <div>
                    <CardImage src={image} alt="case images"/>       
                </div>
        </StyledCard>
    );
}

export default Cases;