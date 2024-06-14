
import caselist from "./caselist";
import Cases from "./Cases";

import { Container } from "../../styles/Container.styled";
import { Headline } from "../../styles/Headline.styled";
import { StyledHeader } from "../../styles/Header.styled";

import { StyledH1 } from "../../styles/Fonts.styled";
import Back from "../../components/GoBack";


function CasePage() {
  return (
    <>
    <StyledHeader>
    <Headline>
        <StyledH1>Cases</StyledH1>
        <p>Joanna Olofsson - UX/UI designer & frontend developer</p>
    </Headline>
    </StyledHeader>
    <Headline id="cases">
    <StyledH1>Cases</StyledH1>
</Headline>
<Container>
    <Back/>
    {caselist.map((item, index) => ( 
        <Cases key={index} item={item}/>
    ))}
</Container>
</>
  )
}

export default CasePage