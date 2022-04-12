import { Droppable } from "react-beautiful-dnd";

import { Grid, Typography,Paper } from "@mui/material";

import { Lead } from '../lead/Lead'
import { LeadList } from './style';

export const LeadStatusColumn = ({ title, id, leads, isDropDisabled }) => {
  return (
    <Grid item xs={4}>
      <Paper  style={{ backgroundColor: '#eee', textAlign: 'center' }}>
        <Typography   variant="h5" padding={1}>
          {title}
        </Typography>
        <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
          {(provided, snapshot) => (
            <LeadList
              ref={provided.innerRef}
              {...provided.droppableProps}
              data-is-dragging-over={snapshot.isDraggingOver}
            >
              {leads.map((lead, index) => (
                <Lead key={lead.id} lead={lead} index={index} />
              ))}
              {provided.placeholder}
            </LeadList>
          )}
        </Droppable>
      </Paper>
    </Grid>
  );
};
