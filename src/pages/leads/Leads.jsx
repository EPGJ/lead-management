import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Grid, Typography, Box } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { LeadStatusColumn } from '../../components/leadStatusColumn/LeadStatusColumn';
import initialState from '../../utils/initialState';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import Image from '../../assets/logo3.svg';
import { checkAuthenticated } from '../../utils/checkAuthenticated';

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

  useEffect(() => {
    checkAuthenticated(navigate);
  }, [])

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} justifyContent="space-between">


          <Grid container item  justifyContent="space-between">
              <Grid container  xs={12} >

                <Grid container  item xs={12} sm={12} md={4} >
                  <Grid item xs={12}>
                    <img src={Image} alt="logo" />
                  </Grid>
                </Grid>

                <Grid container alignItems="left" justifyContent="left" item xs={4} sm={8} md={5} >
                  <Grid item  xs={12} style={{ marginTop: '1rem' }}>
                    <Typography component="h1" variant="h5">Painel de Leads</Typography>
                  </Grid>
                </Grid>

              </Grid>
          </Grid>


          <Grid item xs={8}>
            <Button variant="outlined" onClick={() => navigate('/signin')}>
              <ArrowBackIcon />
              Voltar
            </Button>
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
                        title={column.title}
                        id={column.id}
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
