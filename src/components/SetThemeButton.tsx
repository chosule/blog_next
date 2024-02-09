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
      className="toggle-color fixed h-[29px] w-[66px] rounded-3xl p-2 hover:shadow-[0_0_5px_2px_#1e90ff] dark:hover:shadow-[0_0_5px_2px_#a9a9a9]"
    >
      <div
        className={`absolute left-[3px] top-0 h-[29px] w-[29px] rounded-full bg-neutral-50 ${
          theme === "dark" ? "translate-x-[31px]" : "translate-x-0"
        } z-[1] transition-transform`}
      />
      <div className="absolute left-[14px] top-[3px] flex gap-2">
        <span>☀️</span>
        <span>🌙</span>
      </div>
    </button>
  );
};

export default SetThemeButton;
