import { Howl } from "howler";
import React, { useState } from "react";
import GuitarSVG from "../../assets/guitar.svg";
import "./Guitar.css";

// Define positions for multiple points along each string
const stringPositions = [
  // Each array represents positions for one string (top, left)
  [
    { top: "30%", left: "15%" },
    { top: "30%", left: "25%" },
    { top: "30%", left: "35%" },
  ],
  [
    { top: "35%", left: "15%" },
    { top: "35%", left: "25%" },
    { top: "35%", left: "35%" },
  ],
  [
    { top: "40%", left: "15%" },
    { top: "40%", left: "25%" },
    { top: "40%", left: "35%" },
  ],
  [
    { top: "45%", left: "15%" },
    { top: "45%", left: "25%" },
    { top: "45%", left: "35%" },
  ],
  [
    { top: "50%", left: "15%" },
    { top: "50%", left: "25%" },
    { top: "50%", left: "35%" },
  ],
  [
    { top: "55%", left: "15%" },
    { top: "55%", left: "25%" },
    { top: "55%", left: "35%" },
  ],
];

// Set up Howl instances for each string sound
const stringSounds: Howl[] = [
  new Howl({ src: ["src/assets/sounds/string1.mp3"] }),
  new Howl({ src: ["src/assets/sounds/string2.mp3"] }),
  new Howl({ src: ["src/assets/sounds/string3.mp3"] }),
  new Howl({ src: ["src/assets/sounds/string4.mp3"] }),
  new Howl({ src: ["src/assets/sounds/string5.mp3"] }),
  new Howl({ src: ["src/assets/sounds/string6.mp3"] }),
];

const Guitar: React.FC = () => {
  const [activePoint, setActivePoint] = useState<{
    stringIndex: number;
    pointIndex: number;
  } | null>(null);

  const handlePointClick = (stringIndex: number, pointIndex: number) => {
    setActivePoint({ stringIndex, pointIndex });
    stringSounds[stringIndex].stop(); // Stop the sound if it's currently playing
    stringSounds[stringIndex].play(); // Play sound for this string

    setTimeout(() => setActivePoint(null), 200); // Remove active effect after animation
  };

  return (
    <div className="guitar-container">
      <img src={GuitarSVG} alt="Guitar" className="guitar-image" />
      {stringPositions.map((stringPoints, stringIndex) =>
        stringPoints.map((pos, pointIndex) => (
          <div
            key={`${stringIndex}-${pointIndex}`}
            className={`string-point ${
              activePoint?.stringIndex === stringIndex &&
              activePoint?.pointIndex === pointIndex
                ? "active"
                : ""
            }`}
            style={{ top: pos.top, left: pos.left }}
            onClick={() => handlePointClick(stringIndex, pointIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Guitar;
