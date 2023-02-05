
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { Divider } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError() {
    const history = useHistory();
    const { state } = useLocation<any>();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant='h3' color='error' gutterBottom >{state.error.title}Server error </Typography>
                    <Divider />
                    <Typography>{state.error.detail || 'Internal derver error'}</Typography>
                </>
            ) : (

                <Typography variant='h5' gutterBottom >Server error </Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Gp back to store button</Button>
        </Container>
    )

}