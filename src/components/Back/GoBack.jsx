import { useNavigate } from "react-router-dom";
import { StyledP } from "../../styles/Fonts.styled";
import { StyledTextWrapper, StyledBack } from "../../styles/Containers";
import { StyledBackArrow } from "../../styles/misc.styled";

function Back() {
  const navigate = useNavigate();

  return (
    <>
          <StyledBack onClick={() => navigate(-1)}>
            <StyledBackArrow/>
            <StyledTextWrapper>
            <StyledP>Tillbaka</StyledP>
            </StyledTextWrapper>
          </StyledBack>
    </>
  );
}

export default Back;