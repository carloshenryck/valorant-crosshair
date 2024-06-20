import { useCrosshairStore } from "../stores/CrosshairStore";

export const showInnerVerticalLines = (): boolean => {
  const crosshairConfig = useCrosshairStore.getState().crosshairConfig;
  if (crosshairConfig.innerVerticalEnabled) {
    return crosshairConfig.innerVerticalLength !== "0";
  } else {
    return crosshairConfig.innerLength !== "0";
  }
};

export const showOuterVerticalLines = (): boolean => {
  const crosshairConfig = useCrosshairStore.getState().crosshairConfig;
  if (crosshairConfig.outerVerticalEnabled) {
    return crosshairConfig.outerVerticalLength !== "0";
  } else {
    return crosshairConfig.outerLength !== "0";
  }
};
