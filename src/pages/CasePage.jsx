
import caselist from "./Home/caselist";
import Cases from "./Home/Cases";
import { Container, StyledHeader, StyledHeadline  } from "../styles/Containers";
import { StyledH1} from "../styles/Fonts.styled";
import Back from "../components/Back/GoBack";


function CasePage() {
  return (
    <>
    <Container>
    <StyledHeader>
        

    <StyledHeadline id="cases">
    <Back/>
        <StyledH1>Cases</StyledH1>
    </StyledHeadline>
    </StyledHeader>

    {caselist.map((item, index) => ( 
        <Cases key={index} item={item}/>
    ))}
</Container>
</>
  )
}

export default CasePage