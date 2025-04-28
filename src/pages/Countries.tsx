import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";

import globeImage from "../assets/earth-dark.jpg";
import countries from "../assets/ne_110m_admin_0_countries.json";

const shiftFactor = 0.4;
const shiftAmount = shiftFactor * window.innerWidth;

const Countries: React.FC = () => {
  const globeContainerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({
    width: globeContainerRef.current?.offsetWidth,
    height: globeContainerRef.current?.offsetHeight,
  });
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 1600px)" });

  const updateSize = () => {
    if (globeContainerRef.current) {
      setDimensions({
        width: globeContainerRef.current.offsetWidth,
        height: globeContainerRef.current.offsetHeight,
      });
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={globeContainerRef} className="cursor-move w-screen h-screen">
      <div
        style={{
          marginLeft: isDesktopScreen ? `-${shiftAmount}px` : "",
        }}
      >
        <Globe
          globeImageUrl={globeImage}
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonUseDots={true}
          hexPolygonColor={() =>
            `#${Math.round(Math.random() * Math.pow(2, 24))
              .toString(16)
              .padStart(6, "0")}`
          }
          width={
            (dimensions.width as number) + (isDesktopScreen ? shiftAmount : 0)
          }
          height={dimensions.height}
        />
      </div>
    </div>
  );
};

export default Countries;
