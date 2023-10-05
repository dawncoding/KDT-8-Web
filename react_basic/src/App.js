import { useState } from "react";
import LanguageSelector from "./14Context/LangSelector";
import MyContext from "./14Context/store/lang-context";
import LanguageProvider from "./14Context/LangProvider";

function App() {
  // const [language, setLanguage] = useState("ko");

  return (
    <>
      {/* <MyContext.Provider value={{ language, setLanguage }}>
        <LanguageSelector />
      </MyContext.Provider> */}
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    </>
  );
}

export default App;
