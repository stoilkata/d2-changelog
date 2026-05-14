import { useLang } from "../i18n/LanguageContext";

/** Inline translation: wraps a string through the BG replacements when lang=bg */
export default function T({ children }: { children: string }) {
  const { tx } = useLang();
  return <>{tx(children)}</>;
}
