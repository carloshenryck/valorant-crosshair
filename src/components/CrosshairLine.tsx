import { CSSProperties } from "react";
import { useCrosshairStore } from "../stores/CrosshairStore";
import { getBackgroundColor } from "../utils/colorsFn";
import {
  showInnerVerticalLines,
  showOuterVerticalLines,
} from "../utils/showVerticalLines";

interface CrosshairLineProps {
  position: "top" | "right" | "bottom" | "left";
  type: "inner" | "outer";
}

export default function CrosshairLine({ position, type }: CrosshairLineProps) {
  const crosshairConfig = useCrosshairStore((store) => store.crosshairConfig);
  const {
    innerLength,
    innerThickness,
    innerOffset,
    innerAlpha,
    innerVerticalEnabled,
    innerVerticalLength,
    outerLength,
    outerThickness,
    outerOffset,
    outerAlpha,
    outerVerticalEnabled,
    outerVerticalLength,
    outlinesEnabled,
    outlinesAlpha,
    outlinesThickness,
  } = crosshairConfig;

  const innerStyles: { [key: string]: CSSProperties } = {
    left: {
      width: `${innerLength}px`,
      height: `${innerThickness}px`,
      transform: `translateX(calc(-50% - ${innerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+innerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${innerLength !== "0" ? "block" : "none"}`,
    },
    right: {
      width: `${innerLength}px`,
      height: `${innerThickness}px`,
      transform: `translateX(calc(50% + ${innerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+innerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${innerLength !== "0" ? "block" : "none"}`,
    },
    top: {
      height: `${innerVerticalEnabled ? innerVerticalLength : innerLength}px`,
      width: `${innerThickness}px`,
      transform: `translateY(calc(-50% - ${innerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+innerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${showInnerVerticalLines() ? "block" : "none"}`,
    },
    bottom: {
      height: `${innerVerticalEnabled ? innerVerticalLength : innerLength}px`,
      width: `${innerThickness}px`,
      transform: `translateY(calc(50% + ${innerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+innerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${showInnerVerticalLines() ? "block" : "none"}`,
    },
  };

  const outerStyles: { [key: string]: CSSProperties } = {
    left: {
      width: `${outerLength}px`,
      height: `${outerThickness}px`,
      transform: `translateX(calc(-50% - ${outerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+outerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${outerLength !== "0" ? "block" : "none"}`,
    },
    right: {
      width: `${outerLength}px`,
      height: `${outerThickness}px`,
      transform: `translateX(calc(50% + ${outerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+outerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${outerLength !== "0" ? "block" : "none"}`,
    },
    top: {
      height: `${outerVerticalEnabled ? outerVerticalLength : outerLength}px`,
      width: `${outerThickness}px`,
      transform: `translateY(calc(-50% - ${outerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+outerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${showOuterVerticalLines() ? "block" : "none"}`,
    },
    bottom: {
      height: `${outerVerticalEnabled ? outerVerticalLength : outerLength}px`,
      width: `${outerThickness}px`,
      transform: `translateY(calc(50% + ${outerOffset}px))`,
      backgroundColor: `#${getBackgroundColor(+outerAlpha * 100)}`,
      boxShadow: `${
        outlinesEnabled
          ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
          : ""
      }`,
      display: `${showOuterVerticalLines() ? "block" : "none"}`,
    },
  };

  return (
    <div
      className="absolute box-content transition-transform"
      style={type === "inner" ? innerStyles[position] : outerStyles[position]}
    />
  );
}
