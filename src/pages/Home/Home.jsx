import styled from "styled-components";
import caselist from "./caselist";
import Cases from "./Cases";
import { Container, StyledContentBox, StyledHeader, StyledHeadline } from "../../styles/Containers";
import { HashLink as Link } from "react-router-hash-link";
import { StyledH1, StyledH2, StyledH4 } from "../../styles/Fonts.styled";
import { IoArrowDownSharp } from "react-icons/io5";

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
            <StyledArrowLink to="/#cases"><IoArrowDownSharp size={40}/></StyledArrowLink>
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

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin: 1.5rem 0 0 0;

    @media screen and (min-width: 600px) {
        margin: 0 auto;
    }
`;


const StyledArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowLink = styled(Link)`
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





