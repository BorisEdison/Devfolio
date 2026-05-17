import { ESection } from "../enums/section.enum";
import { ENavAriaLabel, ENavLabel } from "../enums/translationKey.enum";
import type { INavLink } from "../interfaces/navLink.interface";

export const navLinks: INavLink[] = [
  {
    labelKey: ENavLabel.HOME,
    ariaLabelKey: ENavAriaLabel.HOME,
    section: ESection.HOME,
  },
  {
    labelKey: ENavLabel.ABOUT,
    ariaLabelKey: ENavAriaLabel.ABOUT,
    section: ESection.ABOUT,
  },
  {
    labelKey: ENavLabel.TECHNICAL_SKILLS,
    ariaLabelKey: ENavAriaLabel.TECHNICAL_SKILLS,
    section: ESection.TECHNICAL,
  },
  {
    labelKey: ENavLabel.RESUME,
    ariaLabelKey: ENavAriaLabel.RESUME,
    section: ESection.RESUME,
  },
  {
    labelKey: ENavLabel.PROJECTS,
    ariaLabelKey: ENavAriaLabel.PROJECTS,
    section: ESection.PROJECT,
  },
  {
    labelKey: ENavLabel.CONTACT,
    ariaLabelKey: ENavAriaLabel.CONTACT,
    section: ESection.CONTACT,
  },
];
