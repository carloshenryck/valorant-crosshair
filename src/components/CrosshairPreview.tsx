import { useCrosshairStore } from "../stores/CrosshairStore";
import { getBackgroundColor, percentageToHex } from "../utils/colorsFn";
import {
  showInnerVerticalLines,
  showOuterVerticalLines,
} from "../utils/showVerticalLines";

export default function CrosshairPreview() {
  const crosshairConfig = useCrosshairStore((store) => store.crosshairConfig);

  return (
    <div className="size-28 bg-slate-600 relative">
      {crosshairConfig.innerEnabled && (
        <div className="size-full flex items-center justify-center absolute">
          {crosshairConfig.innerLength !== "0" && (
            <>
              <div
                className="absolute box-content"
                style={{
                  width: `${crosshairConfig.innerLength}px`,
                  height: `${crosshairConfig.innerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.innerAlpha * 100
                  )}`,
                  transform: `translateX(calc(-50% - ${crosshairConfig.innerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
              <div
                className="absolute box-content"
                style={{
                  width: `${crosshairConfig.innerLength}px`,
                  height: `${crosshairConfig.innerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.innerAlpha * 100
                  )}`,
                  transform: `translateX(calc(50% + ${crosshairConfig.innerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
            </>
          )}
          {showInnerVerticalLines() && (
            <>
              <div
                className="absolute box-content"
                style={{
                  height: `${
                    crosshairConfig.innerVerticalEnabled
                      ? crosshairConfig.innerVerticalLength
                      : crosshairConfig.innerLength
                  }px`,
                  width: `${crosshairConfig.innerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.innerAlpha * 100
                  )}`,
                  transform: `translateY(calc(-50% - ${crosshairConfig.innerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
              <div
                className="absolute box-content"
                style={{
                  height: `${
                    crosshairConfig.innerVerticalEnabled
                      ? crosshairConfig.innerVerticalLength
                      : crosshairConfig.innerLength
                  }px`,
                  width: `${crosshairConfig.innerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.innerAlpha * 100
                  )}`,
                  transform: `translateY(calc(50% + ${crosshairConfig.innerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
            </>
          )}
        </div>
      )}
      {crosshairConfig.outerEnabled && (
        <div className="size-full flex items-center justify-center absolute">
          {crosshairConfig.outerLength !== "0" && (
            <>
              <div
                className="absolute box-content"
                style={{
                  width: `${crosshairConfig.outerLength}px`,
                  height: `${crosshairConfig.outerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.outerAlpha * 100
                  )}`,
                  transform: `translateX(calc(-50% - ${crosshairConfig.outerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
              <div
                className="absolute box-content"
                style={{
                  width: `${crosshairConfig.outerLength}px`,
                  height: `${crosshairConfig.outerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.outerAlpha * 100
                  )}`,
                  transform: `translateX(calc(50% + ${crosshairConfig.outerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
            </>
          )}
          {showOuterVerticalLines() && (
            <>
              <div
                className="absolute box-content"
                style={{
                  height: `${
                    crosshairConfig.outerVerticalEnabled
                      ? crosshairConfig.outerVerticalLength
                      : crosshairConfig.outerLength
                  }px`,
                  width: `${crosshairConfig.outerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.outerAlpha * 100
                  )}`,
                  transform: `translateY(calc(-50% - ${crosshairConfig.outerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
              <div
                className="absolute box-content"
                style={{
                  height: `${
                    crosshairConfig.outerVerticalEnabled
                      ? crosshairConfig.outerVerticalLength
                      : crosshairConfig.outerLength
                  }px`,
                  width: `${crosshairConfig.outerThickness}px`,
                  backgroundColor: `#${getBackgroundColor()}${percentageToHex(
                    +crosshairConfig.outerAlpha * 100
                  )}`,
                  transform: `translateY(calc(50% + ${crosshairConfig.outerOffset}px))`,
                  boxShadow: `${
                    crosshairConfig.outlinesEnabled
                      ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                      : ""
                  }`,
                }}
              ></div>
            </>
          )}
        </div>
      )}
      {crosshairConfig.dotEnabled && (
        <div
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
          style={{
            width: `${crosshairConfig.dotThickness}px`,
            height: `${crosshairConfig.dotThickness}px`,
            backgroundColor: `#${getBackgroundColor()}${percentageToHex(
              +crosshairConfig.dotAlpha * 100
            )}`,
            boxShadow: `${
              crosshairConfig.outlinesEnabled
                ? `rgba(0, 0, 0, ${crosshairConfig.outlinesAlpha}) 0px 0px 0px ${crosshairConfig.outlinesThickness}px`
                : ""
            }`,
          }}
        />
      )}
    </div>
  );
}
