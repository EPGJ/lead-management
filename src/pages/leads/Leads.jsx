import { useNavigate } from 'react-router-dom';

import { Button, Container, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import { LeadStatusColumn } from '../../components/leadStatusColumn/LeadStatusColumn';

function Leads() {
  const navigate = useNavigate();

  const addLead = () => {
    navigate("/addLead");
  }

  return (
    <Container maxWidth='lg'>

        <Grid container >
          <Typography variant='h4'>Leads</Typography>
        </Grid>

        <Grid>
          <Button variant='contained' onClick={addLead}>
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