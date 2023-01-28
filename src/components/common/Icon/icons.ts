import { default as check } from './icons/check.svg';
import { default as downArrow } from './icons/downArrow.svg';
import { default as leftArrow } from './icons/leftArrow.svg';
import { default as rightArrow } from './icons/rightArrow.svg';
import { default as setting } from './icons/setting.svg';
import { default as toGoHome } from './icons/toGoHome.svg';
import { default as upArrow } from './icons/upArrow.svg';
import { default as logo } from './icons/logo.svg';

export const ICONS = {
  check: check,
  downArrow: downArrow,
  leftArrow: leftArrow,
  rightArrow: rightArrow,
  setting: setting,
  toGoHome: toGoHome,
  upArrow: upArrow,
  logo: logo,
};

export type IconName = keyof typeof ICONS;
