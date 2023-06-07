import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledBack } from "../styles/Back.styled";
import { StyledBackArrow } from "../styles/Back.styled";

function Back() {
  const navigate = useNavigate();

  return (
    <>
      <StyledBack onClick={() => navigate(-1)}><StyledBackArrow/></StyledBack>
    </>
  );
}

export default Back;