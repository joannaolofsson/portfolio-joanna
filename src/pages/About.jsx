import styled from "styled-components";
import { Headline } from "../styles/Headline.styled";
import { StyledHeader } from "../styles/Header.styled";
import { StyledText } from "../styles/Text.styled";

function About() {
    return(
        <>
        <StyledHeader>
            <Headline>
                <h1>About me</h1>
            </Headline>
        </StyledHeader>
        <StyledText>
        <Banner>
        <h4>Jag drivs av de ögonblick när någon får en plötslig idé, hittar en efterlängtad lösning eller inser något 
            om sig själv</h4>
        </Banner>
        <div>
        <h2>My story</h2>
        <p>Jag är en nyfiken, skarp, person som älskar att lära mig nya saker, att utbyta idéer och samarbeta med andra. 
        Genom mitt arbete med KBT så har jag också blivit en fena på att ställa frågor, omformulera svaren och problemlösa. 
        Jag är van att tänka utifrån ett användarperspektiv. Jag tycker både om att arbeta i program som Figma och Miro och 
        även programmera i React. Då jag tidigare arbetat med LEAN är jag väldigt intresserad av att arbeta agilt.</p>

        <p>Sedan 2007 har jag arbetat med KBT behandling för personer med substans-, och spelberoende samt familjebehandling 
        och föräldraskapsstöd. Jag trivs med att hålla i kurser och workshops av olika slag och jobbade under en period som 
        gruppsamordnare. Före 2007 jobbade jag bland annat med att skapa content för webb, inom mat-, och vinbranschen. 
        Jag har även haft en sidoverksamhet, där jag erbjudit kurser och digital coaching kring känslomässigt ätande. 
        Att arbeta med vanor, tilltalar mig särskilt. Det kan vara allt från sådant som rör hälsa, till gaming, shopping 
        och hur vi kan skapa goda arbetsvanor.</p>
        
       <p> Under våren 2022 har jag själv gått kurser i webbutveckling HTML/CSS, UX writing och en kurs i C#. Nu studerar 
        jag UX/UI med frontendkompetens på Chas Academy. Vid sidan om studierna jobbar jag på ett av Stockholms stads 
        stödboenden och håller workshops för föräldrar som vill adoptera via internationell adoption.</p>
        </div>

        <Banner>
            <h4>Fun facts about me</h4>
            <ul>
                <li>I love jigsaw puzzles and killer suduko</li>
                <li>I have taken all kinds of danceclasses, from balett to hip hop</li>
                <li>I think I love Minecraft more than my 8 year old son</li>
            </ul>
        </Banner>
        
        </StyledText>

        </>
    );
}

export default About;

export const Banner = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    font-style: italic;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 40px 0;
    opacity: 0.8;
`;