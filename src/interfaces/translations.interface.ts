import type {
  ECommonAriaLabel,
  EInterestLabel,
  ENavAriaLabel,
  ENavLabel,
} from "../enums/translationKey.enum";

export interface ITranslations {
  nav: Record<ENavLabel, string>;

  ariaLabels: {
    nav: Record<ENavAriaLabel, string>;
    common: Record<ECommonAriaLabel, string>;
  };

  sectionHeadings: {
    about: string;
    interests: string;
  };

  home: {
    name: string;
    role: string;
  };

  about: {
    introStart: string;
    degree: string;
    introAfterDegree: string;
    architecture: string;
    introAfterArchitecture: string;
    problemSolving: string;
    introEnd: string;

    hobbyStart: string;
    keybrText: string;
    keybrLabel: string;
    hobbyAfterKeybr: string;
    tennis: string;
    hobbyAnd: string;
    formulaOne: string;
  };

  interests: Record<EInterestLabel, string>;
}
