import YukinaConfig from "../../yukina.config";
import type I18nKeys from "./keys";
import { en } from "./languages/en";
import { zh_CN } from "./languages/zh_cn";
import { es } from "./languages/es"; 

export type Translation = {
  [K in I18nKeys]: string;
};

const map: { [key: string]: Translation } = {
  en: en,
  es: es,
  "zh-cn": zh_CN,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || en;
}

export function i18n(key: I18nKeys, ...interpolations: string[]): string {
  const lang = YukinaConfig.locale;
  let translation = getTranslation(lang)[key];
  interpolations.forEach((interpolation) => {
    translation = translation.replace("{{}}", interpolation);
  });
  return translation;
}
