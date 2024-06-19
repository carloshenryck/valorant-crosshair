import { crosshairAttrSubtitle } from "../constants/crosshairSubtitle";
import { useCrosshairStore } from "../stores/CrosshairStore";

export const readCrosshairCode = (crosshairCode: string) => {
  const { setCrosshairConfig, resetCrosshair } = useCrosshairStore.getState();
  resetCrosshair();
  const primaryCrosshairCode = extractPrimaryCrosshairCode(crosshairCode);
  const arrayOfCrosshairCode = primaryCrosshairCode.split(";");

  for (let i = 0; i < arrayOfCrosshairCode.length; i += 2) {
    const key = arrayOfCrosshairCode[i];
    const keySubtitle = crosshairAttrSubtitle[key];
    if (!keySubtitle) continue;

    const value = keySubtitle.includes("Enabled")
      ? !!Number(arrayOfCrosshairCode[i + 1])
      : arrayOfCrosshairCode[i + 1];
    setCrosshairConfig(keySubtitle, value);
  }
};

const extractPrimaryCrosshairCode = (crosshairCode: string): string => {
  const startIndex = crosshairCode.indexOf("P");
  if (startIndex === -1) return "";

  const substring = crosshairCode.slice(startIndex + 2);
  const endIndexA = /;A;/g.exec(substring)?.index ?? -1;
  const endIndexS = /;S;/g.exec(substring)?.index ?? -1;
  let endIndex = substring.length;

  if (endIndexA !== -1 && endIndexS !== -1) {
    endIndex = Math.min(endIndexA, endIndexS);
  } else if (endIndexA !== -1) {
    endIndex = endIndexA;
  } else if (endIndexS !== -1) {
    endIndex = endIndexS;
  }

  return substring.slice(0, endIndex);
};
