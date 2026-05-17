import {
  ECommonAriaLabel,
  EInterestLabel,
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

    sectionHeadings: {
      about: "About",
      interests: "Interests",
    },

    home: {
      name: "Boris Edison",
      role: "SWE@Zeus Learning",
    },

    about: {
      introStart: "Hello, I'm Boris Edison, a recent",
      degree: "Computer Engineering",
      introAfterDegree:
        "graduate from Don Bosco Institute of Technology. I'm passionate about",
      architecture: "software architecture",
      introAfterArchitecture: "and",
      problemSolving: "solving complex problems.",
      introEnd:
        "I thrive in collaborative environments and enjoy working with diverse personalities. Let's connect and explore opportunities to innovate together!",
      hobbyStart: "When I'm not coding I do touch typing on",
      keybrText: "keybr.com",
      keybrLabel: "keybr profile link",
      hobbyAfterKeybr: "Once my fingers have given up, I watch some",
      tennis: "tennis",
      hobbyAnd: "and",
      formulaOne: "formula 1!",
    },

    interests: {
      [EInterestLabel.WEB_DEVELOPMENT]: "Web Development",
      [EInterestLabel.FRONTEND_DEVELOPMENT]: "Frontend Development",
      [EInterestLabel.BACKEND_DEVELOPMENT]: "Backend Development",
      [EInterestLabel.TOUCH_TYPING]: "Touch Typing",
      [EInterestLabel.DOMAIN_AND_DNS]: "Domain & DNS",
      [EInterestLabel.PROGRAMMING]: "Programming",
      [EInterestLabel.WEB_HOSTING]: "Web Hosting",
      [EInterestLabel.PRODUCT_MANAGEMENT]: "Product Management",
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

    sectionHeadings: {
      about: "About",
      interests: "Interests",
    },

    home: {
      name: "Boris Edison",
      role: "SWE@Zeus Learning",
    },

    about: {
      introStart: "Hello, I'm Boris Edison, a recent",
      degree: "Computer Engineering",
      introAfterDegree:
        "graduate from Don Bosco Institute of Technology. I'm passionate about",
      architecture: "software architecture",
      introAfterArchitecture: "and",
      problemSolving: "solving complex problems.",
      introEnd:
        "I thrive in collaborative environments and enjoy working with diverse personalities. Let's connect and explore opportunities to innovate together!",
      hobbyStart: "When I'm not coding I do touch typing on",
      keybrText: "keybr.com",
      keybrLabel: "keybr profile link",
      hobbyAfterKeybr: "Once my fingers have given up, I watch some",
      tennis: "tennis",
      hobbyAnd: "and",
      formulaOne: "formula 1!",
    },

    interests: {
      [EInterestLabel.WEB_DEVELOPMENT]: "Web Development",
      [EInterestLabel.FRONTEND_DEVELOPMENT]: "Frontend Development",
      [EInterestLabel.BACKEND_DEVELOPMENT]: "Backend Development",
      [EInterestLabel.TOUCH_TYPING]: "Touch Typing",
      [EInterestLabel.DOMAIN_AND_DNS]: "Domain & DNS",
      [EInterestLabel.PROGRAMMING]: "Programming",
      [EInterestLabel.WEB_HOSTING]: "Web Hosting",
      [EInterestLabel.PRODUCT_MANAGEMENT]: "Product Management",
    },
  },
};
