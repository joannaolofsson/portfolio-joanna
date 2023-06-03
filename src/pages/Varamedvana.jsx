import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledLink } from "../styles/Link.styled";
import { StyledHeader } from "../styles/Header.styled";


function Varamedvana() {
    return(
        <>
        <StyledHeader>
        <Container>

                <div>
                    <h2>My own project</h2>
                    <h4>Brief</h4>
                    <p>I believe that everyone have the ability to change their habit.</p>
                </div>

            </Container>
            </StyledHeader>
            <Container>

           <StyledText>
            <p>Coming soon</p>
           </StyledText>


        </Container>
        </>
    );
}

export default Varamedvana;