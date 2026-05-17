import type { ESection } from "../enums/section.enum";
import type { ENavAriaLabel, ENavLabel } from "../enums/translationKey.enum";

export interface INavLink {
  labelKey: ENavLabel;
  ariaLabelKey: ENavAriaLabel;
  section: ESection;
}
