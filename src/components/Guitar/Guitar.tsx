import { Howl } from "howler";
import React, { useState } from "react";
import GuitarSVG from "../../assets/guitar.svg";
import "./Guitar.css";

const stringPositions = [
  [
    { top: "45.5%", left: "24.2%" },
    { top: "45.5%", left: "36%" },
    { top: "45.5%", left: "50.7%" },
    { top: "45.5%", left: "65.6%" },
    { top: "45.5%", left: "76.6%" },
  ],
  [
    { top: "48.5%", left: "24.2%" },
    { top: "48.5%", left: "36%" },
    { top: "48.5%", left: "50.7%" },
    { top: "48.5%", left: "65.6%" },
    { top: "48.5%", left: "76.6%" },
  ],
  [
    { top: "51.8%", left: "24.2%" },
    { top: "51.8%", left: "36%" },
    { top: "51.8%", left: "50.7%" },
    { top: "51.8%", left: "65.6%" },
    { top: "51.8%", left: "76.6%" },
  ],
];

const stringSounds: Howl[] = [
  new Howl({ src: ["/assets/sounds/string1.mp3"] }),
  new Howl({ src: ["/assets/sounds/string2.mp3"] }),
  new Howl({ src: ["/assets/sounds/string3.mp3"] }),
];

const Guitar: React.FC = () => {
  const [activePoint, setActivePoint] = useState<{
    stringIndex: number;
    pointIndex: number;
  } | null>(null);

  const handlePointClick = (stringIndex: number, pointIndex: number) => {
    setActivePoint({ stringIndex, pointIndex });
    // stringSounds[stringIndex].stop();
    stringSounds[stringIndex].play();

    setTimeout(() => setActivePoint(null), 200);
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
