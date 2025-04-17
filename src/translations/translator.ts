import { TranslationType } from "../types/TranslationType";
import en from "./en";
import pt from "./pt";

export const translations: TranslationType = { en, pt };

let currentLanguage = "en";

export const setLanguage = (language: "en" | "pt") => {
  currentLanguage = language;
};

export const t = (key: string): string => {
  const keys = key.split(".");
  let value: any = translations[currentLanguage];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(
        `Translation key "${key}" not found for language "${currentLanguage}"`
      );
      return key;
    }
  }

  return value;
};

export const useLanguage = (): string => {
  return currentLanguage;
};
