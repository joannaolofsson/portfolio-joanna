import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";


export const CookwiseImage = styled.img`
    width: 400px;
    margin-left: 40px;
    padding-right: 40px;
    @media(max-width: ${({theme}) => theme.mobile }) {
    margin: 40px 0 30px;
    }
`;

function Cookwise() {
    return(
        <>
            <StyledHeader>
                <Container id='case1'>
                <div>
                    <h2 >Cookwise</h2>
                    <h4>Brief</h4>
                    <p>In this group assignment, our group task was to create a basic designsystem in Figma and design a responsive 
                        webapp with styles and components.</p>
                </div>
                </Container>
            </StyledHeader>
            <Container>
            
            <StyledText>
    
                <h2>My roll</h2>
   
                    <CookwiseImage src='../src/assets/cookwise-miro.svg' alt=""/>
                <p>With my background in CBT therapy it comes natural for me to intervju users, and communicate with my team to 
                    inspire ideas and move forward in the process. This being my first group design project, I believe that this was 
                    biggest contribution to the project. I also designed for the webapp and kept the user in mind, throughout the process.
                </p>
         
            
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ad omnis doloribus officia neque minus magni 
                    a provident quae quam!</p>
                    <CookwiseImage src='../src/assets/Persona-Helena.svg' alt="" />
                    
            </StyledText>
            <StyledText>
            <h2>Challenges</h2>
                <p>This project took place during the christmas holiday, which both was to our advantage and not. The challenge 
                    was to conduct user research during a busy family time and for the team to find common "worktime". Another 
                    challenge was our that our experience with Figma and design as a whole differed. This requiring alot of 
                    communication.</p>
                   </StyledText>
            <StyledText>
            <h2>Solution</h2>
         

                <CookwiseImage src='../src/assets/cookwise_app.svg' alt="" />
                <p>Our solution to everything we lacked in, was communication between each other. And to rely on the user experience 
                    and all the sprint work we did in the beginning. Because of this ground work, we never got stuck and always new 
                    what our next step was. 
                </p>
            </StyledText>
            <StyledText>
            <h2>What I learned</h2>
                <p>After our project was complete, we spoke about what we could learn from it. And besides from getting more experience
                    and skills in Figma and with agile work, we all agreed that we learn to stand up for our ideas a little bit more. 
                    For me personally, I also got the first glimpse of that is my strenght in a project and what I want to improve on. I 
                    already have a strong ground in communication and user experience and I want to improve in creating animations.
                       
                </p>
                </StyledText>
                </Container>
                </>
    );
}

export default Cookwise;