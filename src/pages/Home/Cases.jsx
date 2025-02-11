
import { StyledP, StyledH3 } from "../../styles/Fonts.styled";
import { CardImage } from "../../styles/misc.styled";
import { GridContainer, GridItem1, GridItem2 } from "../../styles/Containers";
import { StyledCardLink } from "../../styles/Links.styled";
import { StyledCard } from "../../styles/Containers";

function Cases({ item: { linkTo, title, body, image }, backgroundColor }) {
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