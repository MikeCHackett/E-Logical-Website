import React, { useRef, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        buttonRef.current.style.opacity = '1';
      } else {
        buttonRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className="fixed bottom-0 z-20 left-0 m-8 p-3 rounded-full bg-hover text-white hover:bg-white hover:text-hover focus:outline-none focus:shadow-outline"
        onClick={handleClick}
        ref={buttonRef}
        style={{ opacity: 0 }}
       >
        <FaArrowUp size={24} />
      </button>
    </>
  );
}

export default BackToTopButton;

