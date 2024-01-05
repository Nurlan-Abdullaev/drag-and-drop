import React, { useState } from "react";
import { One } from "./One";
import { Two } from "./Two";
import { Three } from "./Three";

export const Next = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const componentsData = [
    { component: <One />, items: ["one"] },
    { component: <Two />, items: ["two"] },
    { component: <Three />, items: ["three"] },
  ];

  const nextComponent = () => {
    setCurrentComponent((prevComponent) => (prevComponent % 3) + 1);
  };

  const currentData = componentsData[currentComponent - 1];

  return (
    <div>
      {currentData.component}
      <p>{currentData.items.join(", ")}</p>
      <button onClick={nextComponent}>next</button>
    </div>
  );
};
