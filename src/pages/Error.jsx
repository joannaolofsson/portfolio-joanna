import React from 'react'
import { StyledLink } from '../styles/Link.styled';
import { Container } from '../styles/Container.styled';
import { StyledText } from '../styles/Text.styled';
import Back from '../components/GoBack';

function Error() {
  return (
    <div>
      <Container>
      
        <StyledText>
          <h1>Something happed</h1>
        <p>To come back to homepage:</p>
        <Back />
      </StyledText>
      </Container>
    </div>
  );
}

export default Error;