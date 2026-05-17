import type {
  ECommonAriaLabel,
  ENavAriaLabel,
  ENavLabel,
} from "../enums/translationKey.enum";

export interface ITranslations {
  nav: Record<ENavLabel, string>;

  ariaLabels: {
    nav: Record<ENavAriaLabel, string>;
    common: Record<ECommonAriaLabel, string>;
  };

  home: {
    name: string;
    role: string;
  };
}
