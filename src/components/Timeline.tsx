import React, { useState, useEffect, useRef } from "react";

const Timeline: React.FC = () => {
  const [numItems, setNumItems] = useState(3);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateNumItems = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 24;
        const itemsInRow = Math.floor(containerWidth / itemWidth);
        console.log("containerWidth", containerWidth);
        console.log("itemsInRow", itemsInRow);
        setNumItems(itemsInRow > 0 ? itemsInRow : 1);
      }
    };

    updateNumItems();

    window.addEventListener("resize", updateNumItems);

    return () => {
      window.removeEventListener("resize", updateNumItems);
    };
  }, []);

  const renderItems = () => {
    const items = [];
    for (let i = 0; i < numItems; i++) {
      items.push(
        <li key={i}>
          <div className="flex-start flex items-center md:block pt-0">
            <div className="h-[9px] w-[9px] rounded-full bg-white dark:bg-neutral-500 -mt-[5px] me-0 ms-0"></div>
          </div>
        </li>
      );
    }
    return items;
  };

  return (
    <div
      ref={containerRef}
      className="h-12 bg-gray-400 opacity-40 rounded-full pt-9 overflow-hidden"
    >
      <ol className="border-white flex justify-center gap-6 border-s-0 border-t">
        {renderItems()}
      </ol>
    </div>
  );
};

export default Timeline;
