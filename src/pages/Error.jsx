import React from 'react'
import { StyledLink } from '../styles/Link.styled';
import { Container } from '../styles/Container.styled';
import { StyledText } from '../styles/Text.styled';

function Error() {
  return (
    <div>
      <Container>
        <StyledText>
          <h1>Something happed</h1>
        <p>To come back to homepage:</p>
      <StyledLink to="/">Click here</StyledLink>
      </StyledText>
      </Container>
    </div>
  );
}

export default Error;