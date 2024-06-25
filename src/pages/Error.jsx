import React from 'react'
import { Container } from '../styles/Containers';
import Back from '../components/Back/GoBack';

function Error() {
  return (
    <div>
      <Container>
      

          <h1>Something happed</h1>
        <p>To come back to homepage:</p>
        <Back />
      </Container>
    </div>
  );
}

export default Error;