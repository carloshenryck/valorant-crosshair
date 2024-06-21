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

  const isVertical = position === "top" || position === "bottom";

  const getPosition = (offset: string) => {
    return `${isVertical ? "translateY" : "translateX"}(calc(${
      position === "left" || position == "top" ? "-50% - " : "50% + "
    }${offset}px))`;
  };

  const innerStyles: CSSProperties = {
    width: `${isVertical ? `${innerThickness}` : `${innerLength}`}px`,
    height: `${
      isVertical
        ? `${innerVerticalEnabled ? innerVerticalLength : innerLength}`
        : `${innerThickness}`
    }px`,
    transform: `${getPosition(innerOffset)}`,
    backgroundColor: `#${getBackgroundColor(+innerAlpha * 100)}`,
    boxShadow: `${
      outlinesEnabled
        ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
        : ""
    }`,
    display: `${
      isVertical
        ? `${showInnerVerticalLines() ? "block" : "none"}`
        : `${innerLength !== "0" ? "block" : "none"}`
    }`,
  };

  const outerStyles: CSSProperties = {
    width: `${isVertical ? `${outerThickness}` : `${outerLength}`}px`,
    height: `${
      isVertical
        ? `${outerVerticalEnabled ? outerVerticalLength : outerLength}`
        : `${outerThickness}`
    }px`,
    transform: `${getPosition(outerOffset)}`,
    backgroundColor: `#${getBackgroundColor(+outerAlpha * 100)}`,
    boxShadow: `${
      outlinesEnabled
        ? `rgba(0, 0, 0, ${outlinesAlpha}) 0px 0px 0px ${outlinesThickness}px`
        : ""
    }`,
    display: `${
      isVertical
        ? `${showOuterVerticalLines() ? "block" : "none"}`
        : `${outerLength !== "0" ? "block" : "none"}`
    }`,
  };

  return (
    <div
      className="absolute box-content transition-transform"
      style={type === "inner" ? innerStyles : outerStyles}
    />
  );
}
