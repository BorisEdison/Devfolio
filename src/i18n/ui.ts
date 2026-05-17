import {
  ECommonAriaLabel,
  ENavAriaLabel,
  ENavLabel,
} from "../enums/translationKey.enum";
import type { ITranslations } from "../interfaces/translations.interface";
import { ELocale } from "./locales.enum";

export const ui: Record<ELocale, ITranslations> = {
  [ELocale.EN]: {
    nav: {
      [ENavLabel.HOME]: "Home",
      [ENavLabel.ABOUT]: "About",
      [ENavLabel.TECHNICAL_SKILLS]: "Technical Skills",
      [ENavLabel.RESUME]: "Resume",
      [ENavLabel.PROJECTS]: "Projects",
      [ENavLabel.CONTACT]: "Contact",
    },

    ariaLabels: {
      nav: {
        [ENavAriaLabel.HOME]: "home link",
        [ENavAriaLabel.ABOUT]: "about link",
        [ENavAriaLabel.TECHNICAL_SKILLS]: "technical skills link",
        [ENavAriaLabel.RESUME]: "resume link",
        [ENavAriaLabel.PROJECTS]: "projects link",
        [ENavAriaLabel.CONTACT]: "contact link",
      },
      common: {
        [ECommonAriaLabel.TOGGLE_NAVIGATION]: "Toggle navigation",
        [ECommonAriaLabel.FORK_REPOSITORY]: "Fork respository",
        [ECommonAriaLabel.FORK_BUTTON]: "Fork button",
      },
    },

    home: {
      name: "Boris Edison",
      role: "SWE@Zeus Learning",
    },
  },
  [ELocale.HI]: {
    nav: {
      [ENavLabel.HOME]: "Home",
      [ENavLabel.ABOUT]: "About",
      [ENavLabel.TECHNICAL_SKILLS]: "Technical Skills",
      [ENavLabel.RESUME]: "Resume",
      [ENavLabel.PROJECTS]: "Projects",
      [ENavLabel.CONTACT]: "Contact",
    },

    ariaLabels: {
      nav: {
        [ENavAriaLabel.HOME]: "home link",
        [ENavAriaLabel.ABOUT]: "about link",
        [ENavAriaLabel.TECHNICAL_SKILLS]: "technical skills link",
        [ENavAriaLabel.RESUME]: "resume link",
        [ENavAriaLabel.PROJECTS]: "projects link",
        [ENavAriaLabel.CONTACT]: "contact link",
      },
      common: {
        [ECommonAriaLabel.TOGGLE_NAVIGATION]: "Toggle navigation",
        [ECommonAriaLabel.FORK_REPOSITORY]: "Fork respository",
        [ECommonAriaLabel.FORK_BUTTON]: "Fork button",
      },
    },

    home: {
      name: "Boris Edison",
      role: "SWE@Zeus Learning",
    },
  },
};
