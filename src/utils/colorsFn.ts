import { bgColors } from "../constants/colors";
import { useCrosshairStore } from "../stores/CrosshairStore";

export const getBackgroundColor = (): string => {
  const crosshairConfig = useCrosshairStore.getState().crosshairConfig;
  if (crosshairConfig.hexColorEnabled) {
    return crosshairConfig.hexColorValue;
  } else {
    return bgColors[+crosshairConfig.color];
  }
};

export const percentageToHex = (percentage: number): string => {
  const decimal = `0${Math.round(255 * (percentage / 100)).toString(16)}`
    .slice(-2)
    .toUpperCase();
  return decimal;
};
