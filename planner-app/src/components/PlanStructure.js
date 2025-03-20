import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialPlanData = [
  { id: "1", title: "🚀 Sākums", substeps: ["Izvēlies galveno mērķi", "Nosaki virzienu"] },
  { id: "2", title: "📈 Progress", substeps: ["Veido uzdevumu sarakstu", "Plāno soļus"] },
  { id: "3", title: "🏆 Sasniegums", substeps: ["Pārskati paveikto", "Analizē rezultātus"] },
];

const PlanStructure = () => {
  const [planData, setPlanData] = useState(initialPlanData);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(planData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlanData(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="plan" direction="horizontal">
        {(provided) => (
          <div
            className="flex gap-6 p-6 overflow-x-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {planData.map((step, index) => (
              <Draggable key={step.id} draggableId={step.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-blue-200 p-4 rounded-lg shadow-lg min-w-[200px]"
                  >
                    <h2 className="text-lg font-bold">{step.title}</h2>
                    <ul className="mt-2">
                      {step.substeps.map((sub, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 pl-2 border-l-2 border-blue-500"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PlanStructure;
