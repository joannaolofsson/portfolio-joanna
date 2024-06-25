import React from 'react';
import styled from "styled-components";
import Back from '../../components/Back/GoBack';
import { Container, StyledHeader,  StyledHeadline  } from '../../styles/Containers';
import { StyledH2, StyledH3, StyledP, StyledH1 } from '../../styles/Fonts.styled';

function Resume () {
    return(
        <>
            <Container>
                <StyledHeader>
                    <StyledHeadline>
                    <Back/>
                    <StyledH1>Resume</StyledH1>
                    <p>Joanna Olofsson</p>
                    <p>UX designer & frontend developer</p>
    
                </StyledHeadline>
            </StyledHeader>

   
                    <StyledResumeGridContainer>
                        <StyledSkillsSection>
                            <StyledH3>Skills</StyledH3>
                                <ul>
                                    <li>UX/UI</li>
                                    <li>HTML/CSS</li>
                                    <li>React/Javascript</li>
                                    <li>Tailwind</li>
                                    <li>Workshop facilitator</li>
                                </ul>
                                </StyledSkillsSection>
                        <StyledToolSection>
                            <StyledH3>Programs</StyledH3>
                                <ul>
                                    <li>Figma</li>
                                    <li>Miro</li>
                                    <li>Visual Studio Code</li>
                                    <li>Wordpress</li>
                                </ul>
                                </StyledToolSection> 
    
                            <StyledWorkSection>
                                <StyledH2>Relevant workexperience</StyledH2>
                            </StyledWorkSection>
                            <StyledWorkSection1>
                                    <StyledH3>Vattenfall IT </StyledH3>
                                    <StyledP>UX designer - Internship 2023-11 -- 2024-04
                                    </StyledP>
                                    <StyledP>
                                        As a UX intern I have been part of two different design projects for two B2B systems. In the first one, I began 
                                        with prototyping and doing user testing. The biggest challange was to learn how to prototype for a computer system, 
                                        with a huge amount of components, pages and sketches, compared to my school projects. 
                                    </StyledP>
                                    <StyledP>    
                                        The second one I got to 
                                        be a part of from the very beginning, with the user interviews together with a service designer and than with 
                                        my supervisor. Here the challage is that we have to design a MVP with a very tight deadline.  
                                    </StyledP>
                            </StyledWorkSection1>
                            <StyledWorkSection2>

                                    <StyledH3>
                                        Stockholms municipality
                                    </StyledH3>
                               
                                    <StyledP>
                                        Parenting workshops - 2022-2023
                                    </StyledP>
                                    <StyledP>
                                        In my role, I facilitate workshops for groups of individuals undergoing the process 
                                        of adopting a child. This responsibility entails overseeing group dynamics, 
                                        facilitating discussions, and delivering informative sessions.
                                    </StyledP>
                                </StyledWorkSection2>
                                <StyledWorkSection3>
                                    <StyledH3>
                                        Södertälje municipality
                                    </StyledH3>
                                    <StyledP>
                                        CBT therapist - 2007-2018
                                    </StyledP>
                                    <StyledP>
                                        During my tenure, I primarily focused on utilizing Cognitive Behavioral Therapy (CBT) techniques, 
                                        both in individual and group settings. Additionally, I held the position of team leader for a period 
                                        of time. It was during this role that I gained valuable experience in working according to LEAN 
                                        methodologies.
                                    </StyledP>
                                </StyledWorkSection3>
                                <StyledWorkSection4>
      
                                    <StyledH3>Di Luca & Di Luca / Enjoy wine & spirits</StyledH3>

                                    <StyledP>Controller & web -1999-2005</StyledP>
                                    <StyledP>This marked my initial foray into web development, where I not only fulfilled my role as a 
                                        controller but also actively participated in a web project. This involved assessing the 
                                        company's requirements and crafting various web content to meet those needs.</StyledP>

                            </StyledWorkSection4>


                            <StyledCourseSection>
                            <StyledH2>Relevant education</StyledH2>
                          </StyledCourseSection>
                          <StyledCourseSection1>

                                    <StyledH3>Chas Academy - UX/UI with frontend skills</StyledH3>
                                        <StyledP>September 2022 - June 2024</StyledP>
                                        <StyledP>
                                            This educational program encompasses a comprehensive range of skills, including UX and UI design, 
                                            agile methodologies, as well as proficiency in HTML, CSS, JavaScript, and React.
                                        </StyledP>
                                        </StyledCourseSection1>
                                    
                                    <StyledCourseSection2>

                                        <StyledH3>Nackademin - UX writing</StyledH3>
                                        <StyledP>Spring 2022</StyledP>
                                        <StyledP>
                                            In this course, I learned how to write content for users with different challanges. So that they 
                                            understand and use information and functions on a webpage. 
                                        </StyledP>

                                </StyledCourseSection2>
                    </StyledResumeGridContainer>
                </Container>
        </>
    );
}

export default Resume;

const StyledResumeGridContainer = styled.div`
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 1fr);

    @media(min-width: ${({theme}) => theme.small}) {
        grid-template-columns: 1fr, 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);   
    }
`;

const StyledSkillsSection = styled.div`
    grid-area: 1 / 1 / 2 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 1 / 1 / 2 / 2;
    }
`;

const StyledToolSection = styled.div`
    grid-area: 2 / 1 / 3 / 2;

    
    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 1 / 2 / 2 / 3;
    }
`;

const StyledWorkSection = styled.div`
    grid-area: 3 / 1 / 4 / 2;
    border-top: 1px solid #ccc;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 2 / 1 / 3 / 3;
    }
`;


const StyledWorkSection1 = styled.div`
    grid-area: 4 / 1 / 5 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 3 / 1 / 4 / 3;
    }
`;

const StyledWorkSection2 = styled.div`
    grid-area: 5 / 1 / 6 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 4 / 1 / 5 / 3;
    }
`;

const StyledWorkSection3 = styled.div`
    grid-area: 6 / 1 / 7 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 5 / 1 / 6 / 3;
    }
`;

const StyledWorkSection4 = styled.div`
    grid-area: 7 / 1 / 8 / 2;
    border-bottom: 1px solid #ccc;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 6 / 1 / 7 / 3;
    }
`;

const StyledCourseSection = styled.div`
    grid-area: 8 / 1 / 9 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 7 / 1 / 8 / 3;
    }
`;

const StyledCourseSection1 = styled.div`
    grid-area: 9 / 1 / 10 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 8 / 1 / 9 / 3;
    }
`;

const StyledCourseSection2 = styled.div`
    grid-area: 10 / 1 / 11 / 2;

    @media(min-width: ${({theme}) => theme.small}) {
        grid-area: 9 / 1 / 10 / 3;
    }
`;