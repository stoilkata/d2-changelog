import React, { createContext, useContext, useState } from "react";
import { Lang, translations, translateText } from "./translations";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  tx: (text: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (p) => p,
  tx: (t) => t,
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const stored = (localStorage.getItem("lang") as Lang | null) ?? "en";
  const [lang, setLangState] = useState<Lang>(stored);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let node: any = translations[lang];
    for (const k of keys) {
      if (node && typeof node === "object" && k in node) {
        node = node[k];
      } else {
        // fallback to english
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let fallback: any = translations["en"];
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk];
          } else return path;
        }
        return typeof fallback === "string" ? fallback : path;
      }
    }
    return typeof node === "string" ? node : path;
  };

  const tx = (text: string): string => translateText(text, lang);

  return (
    <LangContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
