import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { StyledP } from "../../styles/Fonts.styled";

function Back() {
  const navigate = useNavigate();

  return (
    <>

          <StyledBack onClick={() => navigate(-1)}>
            <StyledBackArrow/>
            <StyledTextWrapper>
            <p>Tillbaka</p>
            </StyledTextWrapper>
          </StyledBack>
    </>
  );
}

export default Back;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 1rem;
`;


const StyledBack = styled.div`
max-width: 200px;
text-decoration: none;
border: none;
font-size: 1rem;
font-weight: 700;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
margin-bottom: 2rem;

&:hover {
    color: purple;
}
`;

const StyledBackArrow = styled(FaArrowLeft)`
display: flex;
justify-content: center;
align-items: center;

`;