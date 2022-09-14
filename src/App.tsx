import { Container, Paper, styled } from '@mui/material';
import React from 'react';

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15
}))

function App() {
  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        Hello World!
      </CalculatorBase>
    </Container>
  );
}

export default App;