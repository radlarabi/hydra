'use client'
import { useState, useEffect } from 'react';

export default function DraggableImage () {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    console.log("Position updated:", position);
  }, [position]);
  
  const handleMouseDown = (event) => {
    setDragging(true);
    setOriginalPosition({ x: position.x, y: position.y });
    const startX = event.pageX - position.x;
    const startY = event.pageY - position.y;
    const handleMouseMove = (event) => {
      if (dragging) {
        setPosition({
          x: event.pageX - startX,
          y: event.pageY - startY
        });
      }
    };
    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (!dragging) {
        setPosition(originalPosition);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className='h-10'>
      <p
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
      
      >csacsacsacscsacscsacsa</p>
      {console.log("x : " + position.x + " y : " + position.y)}
      {/* <img
        src="../../public/assets/Hydra.png"
        alt="Draggable Image"
      /> */}
    </div>
  );
};
