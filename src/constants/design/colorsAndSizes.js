import {Dimensions} from 'react-native';

export const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get(
  'window',
);

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 768;
const defaultFactor = SCREEN_WIDTH > guidelineBaseWidth ? 0.5 : 1.25;
export const calcWidth = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size; // only width
export const calcHeight = (size) =>
  (SCREEN_HEIGHT / guidelineBaseHeight) * size; // only height
export const calcFont = (size, factor = defaultFactor) =>
  size + (calcWidth(size) - size) * factor; // fontsize , margin , padding , iconsize , etc

//sizes
export const INPUTS_AND_BUTTONS_HEIGHT = calcHeight(65);
export const WELCOME_ITEM_HEIGHT = calcHeight(155.58);
export const SEGMENT_HEIGHT = calcHeight(59);
export const MONTHLY_CALENDAR_CONTAINER = calcHeight(59);
export const STEP_NUMBER_HEIGHT = calcHeight(56);
export const REPORT_HEADER_HEIGHT = calcHeight(40);
//// fonts
export const FONT_13 = calcFont(13);
export const FONT_16 = calcFont(16);
export const FONT_18 = calcFont(18);
export const FONT_22 = calcFont(22);
export const FONT_25 = calcFont(25);
export const FONT_37 = calcFont(37);

////colors
export const LOGIN_INPUT_BG = '#F3F3F3';
export const PLACEHOLDER = '#A0A0A0';
export const TEXT_BLACK = '#263231';
export const GREEN100 = '#11A99D';
export const GREEN50 = 'rgba(17,169,157,.1)';
export const WHITE_COLOR = '#fff';
export const BADGE_COLOR = '#8DC53E';
export const EYE_ICON_COLOR = '#848484';
export const RED_COLOR = '#f3184d';
