import { useEffect, useState, useRef } from 'react';
import DraggableImage from "@/components/DraggableImage"
import Draggable from 'react-draggable'; 

export default function about() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [originPos, setOriginPos] = useState({x: 0, y: 0})
    const ref = useRef(null)
    useEffect(() => {
        const interval = setInterval(() => {
            const element = ref.current
            if (element) {
                console.log(element.offsetTop)
                setPosition({ x: element.offsetLeft, y: element.offsetTop });
            }
            else
                console.log("not found")

        }, 2000)
        return () => clearInterval(interval);
    }, [])
    const handleDrag = (e, ui) => {
        const { x, y } = ui;
        setPosition({ x, y });
    };
    const handleDragStart = (e, ui) => {
        const { x, y } = ui;
        setOriginPos({ x, y });
    };
    const handleDragstop = () => {
        if (ref.current) {
            const node = ref.current.node;
            node.style.transform = `translate(${originPos.x}px, ${originPos.y}px)`;
        }
    };

    return (
        <div  style={{ position: 'relative', width: '500px', height: '500px' }} > 
            <Draggable bounds="parent" onDrag={handleDrag} onStart={handleDragStart} onStop={handleDragstop}>
                <p ref={ref} >csacscscs</p>
            </Draggable>
            {position.y}
            
            origin : {originPos.y}
        </div>
    )
}
