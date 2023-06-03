import styled from "styled-components";

import { Container } from "../styles/Container.styled";
import { StyledCard } from "../styles/Card.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledLink } from "../styles/Link.styled";
import { StyledHeader } from "../styles/Header.styled";



export const BrandImage = styled.img`
    width: 500px;
    margin-left: 40px;
    padding-right: 40px;
    @media(max-width: ${({theme}) => theme.mobile }) {
    margin: 40px 0 30px;
    }
`;

function Brand() {
    return(
        <>
        <StyledHeader>
        <Container id='case2'>

                <div>
                    <h2>Brand Style Guide</h2>
                    <h4>Brief</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis dolor velit in qui rem 
                        eum dolorem accusamus ducimus explicabo!</p>
                </div>

                </Container>
                </StyledHeader>
                
                <Container>

            <StyledText>

                <h2>Case description</h2>
                    <p>Skapa en Brand Style Guide till ett påhittat företag, utifrån vad vi gick igenom under lektionen den 
                        18 januari. Ni ska alltså hitta på ett företag som erbjuder något - vad som helst, och utifrån det skapa 
                        en Brand Style Guide.</p>
    
                <h2>My roll</h2>
                    <BrandImage src='../src/assets/Brand_principer.svg' alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo error recusandae deleniti aut dicta ea 
                        commodi excepturi omnis, adipisci voluptate.</p>
    
                <h2>Challanges</h2>
                <BrandImage src='../src/assets/Brand_target.svg' alt="" />
                    <p>En utmaning var att utan att gjort någon user research ta beslut om vilket färgschema som jag skulle 
                        använda. Jag fastnade tidigt vid att vara en stylist var som att lägga ett pussel och hittade en 
                        bild, där en blomma skapats som ett pussel utan att se ut som vanliga puzzelbitar.  Hittade ingen 
                        sådan icon eller bild bland plugin och övervägde att skapa en själv i Illustratior</p>
    
                <h2>How I solved It</h2>
                    <BrandImage src='../src/assets/Brand_components.svg' alt="" />
                    <p>För att överbrygga färgvalet, så sökte jag efter kombinationen av färger i stilbilder, för att begränsa 
                        de beslut jag behövde ta.Jag valde att ta iconen med vanliga pusselbitar, för att spara tid, och 
                        beslutade att istället spara på ursprungsideen till en annan gång. </p>
                    
                <h2>What I learned</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati hic fugiat harum explicabo 
                    numquam suscipit deleniti ea veniam? Optio rem voluptas ullam iste aliquam explicabo beatae distinctio 
                    laborum fuga.</p>
                    </StyledText>
        </Container>
        </>
    );
}

export default Brand;