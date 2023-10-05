// ThemeSelector.js
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();

  const containerStyle = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <div style={containerStyle}>
      <h2>Theme</h2>
      <button onClick={toggleTheme}>
        Theme ({theme === "light" ? "Light" : "Dark"})
      </button>
    </div>
  );
};

export default ThemeSelector;
