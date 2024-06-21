import { useCrosshairStore } from "../stores/CrosshairStore";
import { getBackgroundColor } from "../utils/colorsFn";
import CrosshairLine from "./CrosshairLine";

export default function CrosshairPreview() {
  const crosshairConfig = useCrosshairStore((store) => store.crosshairConfig);

  return (
    <div className="size-28 bg-slate-600 relative">
      {crosshairConfig.innerEnabled && (
        <div className="size-full flex items-center justify-center absolute">
          <CrosshairLine position="left" type="inner" />
          <CrosshairLine position="right" type="inner" />
          <CrosshairLine position="top" type="inner" />
          <CrosshairLine position="bottom" type="inner" />
        </div>
      )}
      {crosshairConfig.outerEnabled && (
        <div className="size-full flex items-center justify-center absolute">
          <CrosshairLine position="left" type="outer" />
          <CrosshairLine position="right" type="outer" />
          <CrosshairLine position="top" type="outer" />
          <CrosshairLine position="bottom" type="outer" />
        </div>
      )}
      {crosshairConfig.dotEnabled && (
        <div
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
          style={{
            width: `${crosshairConfig.dotThickness}px`,
            height: `${crosshairConfig.dotThickness}px`,
            backgroundColor: `#${getBackgroundColor(
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
