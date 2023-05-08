import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Todo from './Todo'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SimpleContainer() {
  return (
    <React.Fragment >
      <CssBaseline />

        <Container maxWidth="lg" >
            <Box sx={{ bgcolor: '#cfe8fc', height: '100%', marginTop: '10px'}} >
              
            <h1>Ciao Pippo!!!</h1>

                <Grid 
                    container rowSpacing={1} 
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    >

                    <Grid xs={11}>
                        <Item>
                          <Todo/>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Box>

        </Container>
    </React.Fragment>
  );
}