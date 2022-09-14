import { Container, Grid, Paper, styled } from '@mui/material';
import React, { useState } from 'react';
import { GridOperationButton } from './Components/GridOperationButton';

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15
}))

const OutputContainer = styled('div')(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overFlow: "hidden"
}))

function App() {

  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  const selectOperation = (operation: string) => {
    setOperation(operation)
  }

  const setDigit = (digit: string) => {
    setCurrentValue(digit)
  }

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>
              {currentValue}
            </OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButton
              operation={"AC"}
              selectOperation={selectOperation}
              selectedOperation={operation} />
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;