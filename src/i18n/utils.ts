import type { ITranslations } from "../interfaces/translations.interface";
import { ELocale } from "./locales.enum";
import { ui } from "./ui";

export const DEFAULT_LOCALE = ELocale.EN;

export function getTranslations(locale: ELocale = DEFAULT_LOCALE): ITranslations {
  return ui[locale] ?? ui[DEFAULT_LOCALE];
}
