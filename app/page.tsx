'use client';

import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstComponent((prev) => !prev);
    }, 4000); // Change component every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <div className="absolute w-full h-full">
          <div className={`flip-container ${showFirstComponent ? 'show-front' : 'show-back'} w-full h-full`}>
            <div className="flipper w-full h-full">
              <div className="front w-full h-full absolute flex items-center justify-center bg-black text-white">
                <h1 className="text-5xl md:text-6xl font-bold">Vinay Kumar</h1>
              </div>
              <div className="back w-full h-full absolute flex items-center justify-center bg-black text-white">
                <h1 className="text-5xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flip-container {
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }

        .flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease-in-out;
          transform-style: preserve-3d;
        }

        .front,
        .back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .front {
          transform: rotateY(0deg);
        }

        .back {
          transform: rotateY(180deg);
        }

        .show-front .flipper {
          transform: rotateY(0deg);
        }

        .show-back .flipper {
          transform: rotateY(180deg);
        }

        @media (min-width: 768px) {
          .front h1,
          .back h1 {
            font-size: 6rem;
          }
        }

        @media (max-width: 767px) {
          .front h1,
          .back h1 {
            font-size: 5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
