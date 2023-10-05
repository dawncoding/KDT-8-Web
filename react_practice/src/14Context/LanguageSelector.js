// LanguageSelector.js
import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <h2>Language: {language === "English" ? "영어" : "한국어"}</h2>
      <button onClick={toggleLanguage}>
        Language ({language === "English" ? "English" : "Korean"})
      </button>
    </div>
  );
};

export default LanguageSelector;
