import RaptorsConfig from "../../raptors.config";
import type I18nKeys from "./keys";
import { es } from "./languages/es";

export type Translation = {
  [K in I18nKeys]: string;
};

export function getTranslation(lang: string): Translation {
  return lang.toLowerCase() === "es" ? es : es;
}

export function i18n(key: I18nKeys, ...interpolations: string[]): string {
  const lang = RaptorsConfig.locale;
  let translation = getTranslation(lang)[key];
  interpolations.forEach((interpolation) => {
    translation = translation.replace("{{}}", interpolation);
  });
  return translation;
}
