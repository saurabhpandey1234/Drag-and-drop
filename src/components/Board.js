import React from "react";

 const Board=(props)=> {
  return (
    <div 
        className="droppable" 
        onDrop={props.drop} 
        onDragOver={props.dragOver}
    >
        {props.children}
    </div>
  );
}
export default Board;
