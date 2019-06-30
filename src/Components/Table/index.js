import React, {Component} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './style.css'

/** Module **/

/** Components **/
import Filter from '../Static_Components/Filter';

/** Store **/
// import {observer} from 'mobx-react';
// import mainStore from '../../Lib/Store/mainStore';

/** Drag and Drop **/
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? '#2195f2' : '#3a3e52',
    borderLeft: isDragging ? '2px solid rgba(255,21,34,0.79)' : '2px solid #2195f2',
    color: isDragging ? "#fff" : "",
    ...draggableStyle,
});

const Table = class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6,7,8,9],
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) return;
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({items,});
    }

    componentWillMount() {
        // mainStore.changeOpenPage("table");
    }

    render() {
        return (
            <main>
                <Filter/>
                <div className="content table_content">
                    <section className="task_table">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided) => (
                                    <div ref={provided.innerRef}>
                                        {this.state.items.map((item, index) => (
                                            <Draggable key={index} draggableId={item} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}
                                                        className="line_card"
                                                    >
                                                        Line #{item}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </section>
                </div>
            </main>
        )
    }
};

export default Table;


