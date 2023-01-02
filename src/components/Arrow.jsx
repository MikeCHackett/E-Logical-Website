import React, { useRef, useEffect } from 'react';


function Arrow() {
  const arrowRef = useRef(null);
  let y = 0;
  let velocityY = 1;

  useEffect(() => {
    const animate = () => {
      y += velocityY;

      // Reverse direction when the arrow hits the bottom of the container
      if (y > 46 - 10 || y < 0) {
        velocityY = -velocityY;
      }

      arrowRef.current.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute bottom-12 right-12 h-50 w-50">
      <svg
        className="w-16 h-16 z-10"
        viewBox="0 0 512 512"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
        ref={arrowRef}
      >
        <path
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

export default Arrow;
