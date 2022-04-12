import { useNavigate } from 'react-router-dom';

import { Button, Container, Grid, Typography, Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { LeadStatusColumn } from '../../components/leadStatusColumn/LeadStatusColumn';
import initialState from '../../utils/initialState';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

const Leads = () => {

  const navigate = useNavigate();
  const [
    leads,
    columns,
    loading,
    homeIndex,
    onDragStart,
    onDragEnd
  ] = useDragAndDrop(initialState);


  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Typography  component="h1" variant="h5">Leads</Typography>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={() => navigate('/addLead')}>
              Novo Lead  <AddCircleOutlineIcon />
            </Button>
          </Grid>

          {!loading && (
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>

              <Grid container spacing={2} item xs={12}>
                {
                  initialState.columnOrder.map((columnId, index) => {
                    const column = columns[columnId];
                    const auxLeads = column.leadsIds.map(
                      (leadId) => leads.filter((lead) => lead.id === +leadId)[0]
                    );

                    const isDropDisabled = homeIndex > index || index > homeIndex + 1;

                    return (
                      <LeadStatusColumn
                        key={column.id}
                        column={column}
                        leads={auxLeads}
                        isDropDisabled={isDropDisabled}
                      />
                    );
                  })
                }
              </Grid>

            </DragDropContext>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Leads;
