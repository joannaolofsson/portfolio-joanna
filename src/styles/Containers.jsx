import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
`;

export const StyledHeader = styled.header`
    padding: 3rem 0 1rem 2rem;
`;

export const StyledNav = styled.nav`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 5vh;
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
    }
`;


export const StyledLinkwrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and(max-width: ${({theme}) => theme.mobile }) {
    width: 100%;
  }
`;



export const StyledHeadline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;  
`;

export const StyledContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
    margin: 2rem;
`;

export const StyledFooter = styled.footer`
background-color: #121212;
color: #fff;
padding: 8rem 2rem 5rem;
`;

export const StyledContentwrapper = styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


@media screen and (min-width: 600px){
    margin: 0 0 0 5rem;
}
`;

/* For back button */
export const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 1rem;
`;

/* Back funktionen */ 
export const StyledBack = styled.div`
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
font-weight: 400;

&:hover {
    color: purple;
}
`;

/* Grid */


export const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: 1fr, 1fr 1fr;
    gap: 1rem;
    list-style-type: none;
    padding: 2rem;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr, 1fr, 1fr;
        padding: 2rem;


    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    }
`;


export const GridItem1 = styled.li`
    grid-area: 1 / 1 / 2 / 2;

    p {
        padding: 1em 0 1em 0;
    }


    @media screen and (min-width: 600px) {
        grid-area: 1 / 1 / 2 / 3;
        align-self: center;
        justify-self: flex-start;

        p {
        padding: 1em 0 1em 0;
        }

    }

    @media screen and (min-width: 768px) {
        grid-area: 1 / 1 / 2 / 2;
        align-self: center;
        justify-self: center;

        p {
        padding: 1em 0 0 0;
        }
    }
`;

export const GridItem2 = styled.li`

    grid-area: 2 / 1 / 3 / 2;



    @media screen and (min-width: 600px) {
        grid-area: 2 / 1 / 3 / 2;
        align-self: center;
        justify-self: flex-start;

    }

    @media screen and (min-width: 768px) {
        grid-area: 1 / 2 / 2 / 3;
        align-self: flex-end;
        justify-self: center;
    }
`;

export const StyledCard = styled.div`
    max-width: 100vw;
    background-color: #fff;
    border-radius: 0.5rem;
    margin: 1.5em;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.15);
    }
`;

/* TO home */
export const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin: 1.5rem 0 0 0;

    @media screen and (min-width: 600px) {
        margin: 0 auto;
    }
`;

/* To arrow home */
export const StyledArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* About me page banner */
export const Banner = styled.div`
    max-width: 100%;
    padding: 1.5em;
    margin: 2rem;
    font-style: italic;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and  (min-width: 600px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

/* About me page */
export const StyledTextRow = styled.div`
  padding-bottom: 1.5em;
`;

/* About me page */
export const StyledHeadingWrapper = styled.div`
    padding: 1.5em 0;
`;
/* About me page */
export const StyledTextPage = styled.div`
  max-width: 100%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;
