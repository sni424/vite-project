import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Bdnd = () => {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(magic) => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        one
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        two
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default Bdnd;
