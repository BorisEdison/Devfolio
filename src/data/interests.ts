import { EInterestLabel } from "../enums/translationKey.enum";
import type { IInterest } from "../interfaces/interest.interface";

export const interests: IInterest[] = [
  {
    labelKey: EInterestLabel.WEB_DEVELOPMENT,
    icon: "ri:html5-fill",
    animationDelay: 100,
  },
  {
    labelKey: EInterestLabel.FRONTEND_DEVELOPMENT,
    icon: "akar-icons:bootstrap-fill",
    animationDelay: 200,
  },
  {
    labelKey: EInterestLabel.BACKEND_DEVELOPMENT,
    icon: "mdi:database",
    animationDelay: 300,
  },
  {
    labelKey: EInterestLabel.TOUCH_TYPING,
    icon: "material-symbols:keyboard",
    animationDelay: 400,
  },
  {
    labelKey: EInterestLabel.DOMAIN_AND_DNS,
    icon: "eos-icons:dns",
    animationDelay: 100,
  },
  {
    labelKey: EInterestLabel.PROGRAMMING,
    icon: "mdi:code-braces",
    animationDelay: 200,
  },
  {
    labelKey: EInterestLabel.WEB_HOSTING,
    icon: "cib:amazon-aws",
    animationDelay: 300,
  },
  {
    labelKey: EInterestLabel.PRODUCT_MANAGEMENT,
    icon: "fluent:people-team-16-filled",
    animationDelay: 400,
  },
];
