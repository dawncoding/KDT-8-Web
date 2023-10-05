// App.js
import React from "react";
import { ThemeProvider } from "./14Context/ThemeContext";
import { LanguageProvider } from "./14Context/LanguageContext";
import ThemeSelector from "./14Context/ThemeSelector";
import LanguageSelector from "./14Context/LanguageSelector";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <h1>User Settings</h1>
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
