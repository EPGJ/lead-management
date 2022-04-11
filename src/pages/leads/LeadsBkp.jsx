import { useNavigate } from 'react-router-dom';

import { Button, Container,Box, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import { LeadStatusColumn } from '../../components/leadStatusColumn/LeadStatusColumn';

function Leads() {
  const navigate = useNavigate();

  const addLead = () => {
    navigate("/addLead");
  }

  return (
    <Container  maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
            {/* <LeadStatusColumn />          
            <LeadStatusColumn />          
            <LeadStatusColumn />            */}
          </Grid>
        </DragDropContext>
        
      </Box>
    </Container>
  )
}

export default Leads