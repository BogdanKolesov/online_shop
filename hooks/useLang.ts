"use client";
import { useUnit } from "effector-react";
import { $lang } from "@/context/langs";
import translationsJson from "@/public/translations/translations.json";

export default function useLang() {
  const lang = useUnit($lang);
  const translations = translationsJson;
  return { lang, translations };
}
