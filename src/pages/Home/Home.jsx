import styled from "styled-components";
import caselist from "./caselist";
import Cases from "./Cases";
import { Container, StyledContentBox, StyledHeader, StyledHeadline } from "../../styles/Containers";
import { HashLink as Link } from "react-router-hash-link";
import { StyledH1, StyledH2, StyledPHome } from "../../styles/Fonts.styled";
import { FaArrowDownLong } from "react-icons/fa6";


function Home() {
    return(
       <>
       <Container>
        <StyledHeader>
            <StyledHeadline>
                <div>
                    <StyledPHome>I'm Joanna Olofsson</StyledPHome>
                    <StyledH1>UX designer & frontend developer</StyledH1>
                </div>

            </StyledHeadline>
        </StyledHeader>
        <StyledArrowWrapper>
            <StyledArrowLink to="/#cases"><FaArrowDownLong size={40}/></StyledArrowLink>
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
background-color: #ebd1eb;
transform: scale(0.98);
border-radius: 40%;
}
`;

/* Lägg in focus markeringar här */





