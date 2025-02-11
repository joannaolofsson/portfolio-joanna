import caselist from "./caselist";
import Cases from "./Cases";
import { Container, StyledContentBox, StyledHeader, StyledHeadline } from "../../styles/Containers";
import { StyledH1, StyledH2, StyledH4 } from "../../styles/Fonts.styled";
import { IoArrowDownSharp } from "react-icons/io5";
import { StyledArrowLink } from "../../styles/Links.styled";
import { StyledHero, StyledArrowWrapper } from "../../styles/Containers";

function Home() {
    return(
       <>
       <Container>
        <StyledHeader>
            <StyledHeadline>
                <StyledHero>
                    <StyledH4>I'm Joanna Olofsson</StyledH4>
                    <StyledH1>UX designer & frontend developer</StyledH1>
                </StyledHero>

            </StyledHeadline>
        </StyledHeader>
        <StyledArrowWrapper>
            <StyledArrowLink to="/#cases"><IoArrowDownSharp size={32}/></StyledArrowLink>
        </StyledArrowWrapper>
        <StyledContentBox id="cases">
            <StyledH2>Cases</StyledH2>
        </StyledContentBox>
            {caselist.map(item => (
                <Cases key={item.id} item={item} backgroundColor={item.backgroundColor} />
            ))}
        </Container>
        </>
    );
}

export default Home;

