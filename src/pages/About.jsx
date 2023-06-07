import styled from "styled-components";
import { Headline } from "../styles/Headline.styled";
import { StyledHeader } from "../styles/Header.styled";
import { StyledText } from "../styles/Text.styled";
import { Container } from "../styles/Container.styled";
import Back from "../components/GoBack";


function About() {
    return(
        <>
        <StyledHeader>
            <Headline>
                <h1>About me</h1>
            </Headline>
        </StyledHeader>
        <Container>
        <Back />

        <Banner>
        <h4>"I am driven by the moments when someone has a sudden idea, finds a long-awaited solution, or 
            discovers something about themselves."</h4>
        </Banner>

        <h2>My story</h2>
        <p>Passionate about learning and collaborating with others, I thrive on finding innovative solutions and working 
            together to reach common goals. As a UX designer, I find great joy in the creative process, with 
            everything from user research and wireframing to facilitating workshops. </p>

        <p>Creation is my ultimate passion, whether it involves designing components in Figma or implementing them in 
            React. While my focus has primarily been on UX design, I also want to expand my skills in development.</p>
        
       <p>For an extended period, I dedicated myself to working as a CBT therapist, specializing in assisting individuals 
            struggling with gambling, alcohol, and substance abuse. This experience has provided me with invaluable insights 
            into human behavior, understanding their underlying needs and challenges. Interacting with individuals with 
            various psychological issues has increased my ability to see different user needs and an interest to work according 
            to WCAG guidelines to continue helping people.</p>

        <p>I enjoy conducting courses and workshops, having previously served as a team leader. My exposure to LEAN 
            methodologies, as well as my passion for the “process” have made me naturally interested in agile and Scrum 
            practices..</p>
            
        <p>Currently, I am pursuing studies in UX/UI with frontend skills at Chas Academy. Alongside my studies, I have one 
            part-time job at a county housing facility for individuals battling addiction and another, where  I conduct 
            workshops for adults interested in international adoption. To unwind, I turn to large jigsaw puzzles and 
            podcasts with calming voices. </p>


        <Banner>
            <h4>Fun facts about me</h4>
            <ul>
                <li>I believe that everyone has the potential to change their lives, one habit at a time</li>
                <li>I have taken all kinds of danceclasses, from ballet, to tapping and hip hop</li>
                <li>I think I love Minecraft more than my 8 year old son</li>
            </ul>
        </Banner>
        </Container>
        
        </>
    );
}

export default About;

export const Banner = styled.div`
    max-width: 1000px;
    padding: 1rem;
    font-style: italic;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 40px 0;
    opacity: 0.8;
`;