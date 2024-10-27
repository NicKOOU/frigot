// src/components/IceCube.js
import React, { useEffect, useState } from 'react';
import iceCube from '../assets/img/brand/logo.webp';

const IceCube = () => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = window.scrollY / maxScroll;

    // Réduit l'opacité et la taille du glaçon en fonction du défilement
    setOpacity(1 - scrollFraction);
    setScale(1 - scrollFraction * 0.5); // Taille diminue de moitié à la fin du défilement
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <img
        src={iceCube}
        alt="Ice Cube"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'transform 0.1s, opacity 0.1s',
          width: '150px',
        }}
      />
    </div>
  );
};

export default IceCube;
