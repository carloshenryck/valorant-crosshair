import { bgColors } from "../constants/colors";
import { useCrosshairStore } from "../stores/CrosshairStore";

export const getBackgroundColor = (alpha: number): string => {
  const crosshairConfig = useCrosshairStore.getState().crosshairConfig;
  if (crosshairConfig.hexColorEnabled) {
    const hexValue = crosshairConfig.hexColorValue;
    const hasAlpha = hexValue.length === 8;
    return hasAlpha ? hexValue : `${hexValue}${percentageToHex(alpha)}`;
  } else {
    return bgColors[+crosshairConfig.color];
  }
};

export const percentageToHex = (percentage: number): string => {
  if (percentage === 100) return "";
  const decimal = `0${Math.round(255 * (percentage / 100)).toString(16)}`
    .slice(-2)
    .toUpperCase();
  return decimal;
};
