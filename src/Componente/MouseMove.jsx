import { useEffect, useState } from "react";

function MouseMove() {
  const [mouse, setMouse] = useState({x: 0, y: 0});

  const mousePosition = (e) => {
    const width = window.innerWidth / 2;
    
    setMouse({ x: e.clientX, y: e.clientY });

    if (mouse.x > width) {
      document.body.style.backgroundColor = 'blue';
    } else {
      document.body.style.backgroundColor = 'red';
    }

  };

  useEffect(() => {
    window.addEventListener('mousemove', mousePosition);
    return () => {
      window.removeEventListener('mousemove', mousePosition);
    };
  });

  return (
    <div >
      I am now on X = {mouse.x} and Y = {mouse.y}
    </div>
  );
}

export default MouseMove;