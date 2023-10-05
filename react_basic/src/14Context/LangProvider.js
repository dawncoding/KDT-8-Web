import { useState } from "react";
import MyContext from "./store/lang-context";

export default function LanguageProvider() {
  const [language, setLanguage] = useState("ko");
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </MyContext.Provider>
  );
}
