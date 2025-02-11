import styled from "styled-components";

export const StyledBankGridContainer = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 2rem;

    @media screen and  (min-width: 768px) {
        grid-template-columns: 320px 1fr;   
        grid-template-rows: repeat(auto-fit, 1fr);   
        gap: 3rem;
    }
`;

export const StyledBriefwrapper = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 3rem 2rem 0 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 1 / 1 / 2 / 3;
        border-right: 1px solid #CCC;    
    }
`;



export const StyledCaseRole = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    padding: 3rem 2rem 0 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 2 / 1 / 3 / 2;
        border-right: 1px solid #ccc;
    }
`;

export const StyledTextRow = styled.div`
  padding-bottom: 1rem;
`;


export const StyledImgWrapper1 = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    padding: 0 2rem 2rem 7rem;

    @media screen and  (min-width: 768px) {
        grid-area: 2 / 2 / 3 / 3;

    }
`;


export const StyledContent1wrapper = styled.div`
        grid-area: 4 / 1 / 5 / 2;

        @media screen and  (min-width: 768px) {
        grid-area: 3 / 1 / 4 / 3;
    
    }
`;

export const StyledContent1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;



export const StyledImgWrapper2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 4 / 1 / 5 / 2;
        border-right: 1px solid #ccc;

    }
`;

export const StyledImgWrapper3 = styled.div`
    grid-area: 6 / 1 / 7 / 2;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        grid-area: 4 / 2 / 5 / 3;

    }
`;


export const StyledContent2wrapper = styled.div`
    grid-area: 7 / 1 / 8 / 2;
    


    @media screen and  (min-width: 768px) {
        grid-area: 5 / 1 / 6 / 3;
    }
`;

export const StyledContent2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;

    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;





export const StyledContent3wrapper = styled.div`
      grid-area: 8 / 1 / 9 / 2;
    


    @media screen and  (min-width: 768px) {
        grid-area: 6 / 1 / 7 / 3;
    }
`;

export const StyledContent3 = styled.div`
  
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;


    @media screen and  (min-width: 768px) {
        border-right: 1px solid #ccc;
    }
`;

