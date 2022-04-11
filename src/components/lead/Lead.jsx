import { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Container } from './style';

export const Lead = ({ lead, index }) => {

  useEffect(() => {
    console.log(lead.id);
    }, []);

  return (
    <Draggable draggableId={`${lead.id}`} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          data-is-dragging={snapshot.isDragging}
        >
          {lead.name}
        </Container>
      )}
    </Draggable>
  );
};
