import React from 'react';
import styled from "styled-components";
import Back from '../../components/GoBack';
import { Container } from '../../styles/Container.styled';
import { StyledHeader } from '../../styles/Header.styled';
import { Headline } from '../../styles/Headline.styled';
import { StyledH4, StyledLi, StyledH3, StyledP, StyledH1 } from '../../styles/Fonts.styled';

function Resume () {
    return(
        <>
            <StyledHeader>
                <Headline>
                    <StyledH1>Resume</StyledH1>
                    <p>Joanna Olofsson - UX/UI designer & frontend developer</p>
                </Headline>
            </StyledHeader>
            <Container>
                <Back />
                    <Sidebar>
                        <div>
                            <StyledH4>Skills</StyledH4>
                                <ul>
                                    <li>
                                        UX/UI
                                    </li>
                                    <li>
                                        HTML/CSS
                                    </li>
                                    <li>
                                        React/Javascript
                                    </li>
                                    <li>
                                        Tailwind
                                    </li>
                                    <li>
                                        Workshop facilitator
                                    </li>
                                </ul>
                        </div>
                        <div>
                            <StyledH4>Programs</StyledH4>
                                <ul>
                                    <li>
                                        Figma
                                    </li>
                                    <li>
                                        Miro
                                    </li>
                                    <li>
                                        Visual Studio Code
                                    </li>
                                    <li>
                                        Wordpress
                                    </li>
                                </ul>
                        </div>    
                    </Sidebar>

                    <MainBox>
                        <MainBoxExp>
                            <StyledH3>Relevant workexperience</StyledH3>
                                <ul> 
                                <StyledLi>
                                    <StyledH4>
                                        Vattenfall IT 
                                    </StyledH4>
                                    <StyledP>
                                        UX designer - Internship 2023-11 -- 2024-04
                                    </StyledP>
                                    <StyledP>
                                        As a UX intern I have been part of two different design projects for two B2B systems. In the first one, I began 
                                        with prototyping and doing user testing. The biggest challange was to learn how to prototype for a computer system, 
                                        with a huge amount of components, pages and sketches, compared to my school projects. 
                                    </StyledP><StyledP>    
                                        The second one I got to 
                                        be a part of from the very beginning, with the user interviews together with a service designer and than with 
                                        my supervisor. Here the challage is that we have to design a MVP with a very tight deadline.  
                                    </StyledP>
                                </StyledLi>
                                <StyledLi>
                                    <StyledH4>
                                        Stockholms municipality
                                    </StyledH4>
                               
                                    <StyledP>
                                        Parenting workshops - 2022-2023
                                    </StyledP>
                                    <StyledP>
                                        In my role, I facilitate workshops for groups of individuals undergoing the process 
                                        of adopting a child. This responsibility entails overseeing group dynamics, 
                                        facilitating discussions, and delivering informative sessions.
                                    </StyledP>
                                </StyledLi>
                                <StyledLi>
                                    <StyledH4>
                                        Södertälje municipality
                                    </StyledH4>
                                    <StyledP>
                                        CBT therapist - 2007-2018
                                    </StyledP>
                                    <StyledP>
                                        During my tenure, I primarily focused on utilizing Cognitive Behavioral Therapy (CBT) techniques, 
                                        both in individual and group settings. Additionally, I held the position of team leader for a period 
                                        of time. It was during this role that I gained valuable experience in working according to LEAN 
                                        methodologies.
                                    </StyledP>
                                </StyledLi>
                                <StyledLi>
                                    <StyledH4>
                                        Di Luca & Di Luca / Enjoy wine & spirits
                                    </StyledH4>

                                    <StyledP>
                                        Controller & web -1999-2005
                                    </StyledP>
                                    <StyledP>This marked my initial foray into web development, where I not only fulfilled my role as a 
                                        controller but also actively participated in a web project. This involved assessing the 
                                        company's requirements and crafting various web content to meet those needs.</StyledP>
                                </StyledLi>
                            </ul>
                        </MainBoxExp>
                        
                        <MainBoxEdu>
                            <StyledH3>
                                Relevant education
                            </StyledH3>
                                <ul>
                                    <StyledLi>
                                    <StyledH4>
                                        Chas Academy - UX/UI with frontend skills
                                    </StyledH4>
                                        <StyledP>
                                            September 2022 - June 2024
                                        </StyledP>
                                        <StyledP>
                                            This educational program encompasses a comprehensive range of skills, including UX and UI design, 
                                            agile methodologies, as well as proficiency in HTML, CSS, JavaScript, and React.
                                        </StyledP>
                                    </StyledLi>

                                    <StyledLi>
                                        <StyledH4>
                                            Nackademin - UX writing
                                        </StyledH4>
                                        <StyledP>
                                            Spring 2022
                                        </StyledP>
                                        <StyledP>
                                            In this course, I learned how to write content for users with different challanges. So that they 
                                            understand and use information and functions on a webpage. 
                                        </StyledP>
                                    </StyledLi>
                                </ul> 
                        </MainBoxEdu>
                    </MainBox>
                </Container>
        </>
    );
}

export default Resume;

const Sidebar = styled.div`
    max-width: 100%;
    padding-left: 1rem;
    display:flex ;
    flex-direction: row;
    justify-content: space-evenly;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainBoxExp = styled.div`
    margin-top: 1rem;
    padding-bottom: 1rem;
`;

const MainBoxEdu = styled.div`
    margin-top: 1rem;
    padding-bottom: 1rem;
`;

