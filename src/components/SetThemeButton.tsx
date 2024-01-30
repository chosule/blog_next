"use client";
import { useState, useEffect } from "react";

const SetThemeButton = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "dark");

  const isDark = theme === "light";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? "dark" : "light");
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <button 
      onClick={toggleTheme} 
      aria-label={`change to ${isDark}`} 
      title={`change to ${isDark}`}
      className="w-[66px] h-[29px] p-2 rounded-3xl fixed toggle-color hover:shadow-[0_0_5px_2px_#1e90ff] dark:hover:shadow-[0_0_5px_2px_#a9a9a9]" 
      >
      <div
        className={`absolute top-0 left-[3px] bg-neutral-50 rounded-full w-[29px] h-[29px] ${
          theme === "dark" ? "translate-x-[31px]" : "translate-x-0"
        } transition-transform z-[1]`}
      />
      <div className="absolute flex gap-2 top-[3px] left-[6px]">
        <span>☀️</span>
        <span>🌙</span>
      </div>
    </button>
  );
};

export default SetThemeButton;
