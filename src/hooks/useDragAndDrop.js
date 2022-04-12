import { useEffect, useState } from 'react';

export const useDragAndDrop = (initialState) => {

  const [leads, setLeads] = useState([]);
  const [columns, setColumns] = useState();
  const [loading, setLoading] = useState(true);
  const [homeIndex, setHomeIndex] = useState();

  useEffect(() => {
    const loadLeads = JSON.parse(window.localStorage.getItem('leads') || '[]');
    setLeads(loadLeads);
  }, []);

  useEffect(() => {
    if (leads.length > 0) {
      let segmentedLeads = [];

      leads.forEach((lead) => {
        const destination = initialState.statusLead.indexOf(lead.status);
        if (!segmentedLeads[destination]) segmentedLeads[destination] = [];
        segmentedLeads[destination].push(`${lead.id}`);
      });

      const newColumns =
        JSON.parse(window.localStorage.getItem('columns')) ||
        initialState.columns;

      const haveNewLead =
        segmentedLeads[0] &&
        segmentedLeads[0].length >
          newColumns[initialState.columnOrder[0]].leadsIds.length;

      if (newColumns === initialState.columns || haveNewLead) {
        let i = 0;
        for (const column in newColumns) {
          newColumns[column].leadsIds = segmentedLeads[i]
            ? [...segmentedLeads[i]]
            : [];
          i++;
        }
      }

      updateColumns(newColumns);

      setLoading(false);
    }
  }, [leads]);

  const updateLeads = (status, leadId) => {
    setLeads((leads) => {
      const index = leads.findIndex((lead) => lead.id === +leadId);
      if (index !== -1) leads[index].status = status;

      window.localStorage.setItem('leads', JSON.stringify(leads));
      return leads;
    });
  };

  const updateColumns = (newColumns) => {
    setColumns((columns) => {
      columns = { ...columns, ...newColumns };

      window.localStorage.setItem('columns', JSON.stringify(columns));
      return columns;
    });
  };

  const onDragStart = (start) => {
    const newHomeIndex = initialState.columnOrder.indexOf(
      start.source.droppableId
    );

    setHomeIndex(newHomeIndex);
  };

  const onDragEnd = (result) => {
    setHomeIndex(null);

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newLeadsIds = [...start.leadsIds];
      newLeadsIds.splice(source.index, 1);
      newLeadsIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        leadsIds: newLeadsIds,
      }; 

      updateColumns({ [newColumn.id]: newColumn });
      return;
    }

    const startLeadIds = [...start.leadsIds];
    startLeadIds.splice(source.index, 1);
    const newStart = {
      ...start,
      leadsIds: startLeadIds,
    };

    const finishTaskIds = [...finish.leadsIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      leadsIds: finishTaskIds,
    };

    updateColumns({ [newStart.id]: newStart, [newFinish.id]: newFinish });
    updateLeads(newFinish.title, draggableId);
  };


    return [leads, columns, loading, homeIndex, onDragStart, onDragEnd];

}