import styled from "styled-components";

export const StyledText = styled.div`
    width: 100%;
    padding-left: 40px;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: ${({theme}) => theme.mobile }) {
    flex-direction: column;
    justify-content: center;
    }
`;

export const StyledTextWord = styled.div`
 margin: 0.5rem;
 @media(max-width: ${({theme}) => theme.mobile }) {
    margin: 0rem;
    }
`;