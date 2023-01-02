import GlobeImage from '../../src/assets/globe.png';
import React, { useRef, useEffect } from 'react';

function Globe() {
  const globeRef = useRef(null);
  let rotation = 0;

  useEffect(() => {
    const animate = () => {
      rotation += 0.5;
      globeRef.current.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <img
      src={GlobeImage}
      className="w-40 h-40 rounded-full"
      ref={globeRef}
    />
  );
}

export default Globe;

