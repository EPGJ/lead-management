import { Button, Container, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import { LeadStatusColumn } from '../../components/leadStatusColumn/LeadStatusColumn';

function Leads() {
  return (
    <Container maxWidth='lg'>

        <Grid container >
          <Typography variant='h4'>Leads</Typography>
        </Grid>

        <Grid>
          <Button variant="contained" >
            Novo Lead (+)
          </Button>
        </Grid>

        <DragDropContext>
          <Grid container>
            <LeadStatusColumn />          
            <LeadStatusColumn />          
            <LeadStatusColumn />           
          </Grid>
        </DragDropContext>
        

    </Container>
  )
}

export default Leads