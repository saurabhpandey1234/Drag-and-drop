import React from "react";

const Card=(props)=> {
  return (
    <div className="card" draggable onDragStart={props.onDragStart}>
      {props.children}
    </div>
  );
}
export default Card;
