import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation: string) => void;
    selectedOperation?: string;
}

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor: "#2b2e2c",
    borderColor: props.selected ? "#fff" : "#ff30ba",
}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
    operation,
    selectOperation,
    selectedOperation,
}) => {
    return (
        <Grid item>
            <StyledButton fullWidth variant="outlined"
                onClick={() => selectOperation(operation)}
                selected={selectedOperation === operation} >
                {operation}
            </StyledButton>
        </Grid>
    )
}