import React, { useState } from "react";
import Theme1 from "./themes/Them1";
import Theme2 from "./themes/Them2";
import Theme3 from "./themes/Them3";

function Calculator() {
  const [activeTheme, setActiveTheme] = useState(1);

  const handleThemeChange = (themeNumber) => {
    setActiveTheme(themeNumber);
  }

  return (
    <div className="relative">
    <div
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
        activeTheme === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Theme1 onToggle={() => handleThemeChange(2)} />
    </div>

    <div
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
        activeTheme == 2 ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Theme2 onToggle={() => handleThemeChange(3)} />
    </div>

    <div
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
        activeTheme === 3 ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <Theme3 onToggle={() => handleThemeChange(1)} />
    </div>
  </div>


  );
}

export default Calculator;
