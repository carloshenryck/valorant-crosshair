import { useCrosshairStore } from "../stores/CrosshairStore";

interface CrosshairLineProps {
  position: "top" | "right" | "bottom" | "left";
  type: "inner" | "outer";
}

export default function CrosshairLine({ position, type }: CrosshairLineProps) {
  const crosshairConfig = useCrosshairStore((store) => store.crosshairConfig);

  const innerStyles = {
    left: {
      width: `${crosshairConfig.innerLength}px`,
      height: `${crosshairConfig.innerThickness}px`,
      transform: `translateX(calc(-50% - ${crosshairConfig.innerOffset}px))`,
    },
    right: {
      width: `${crosshairConfig.innerLength}px`,
      height: `${crosshairConfig.innerThickness}px`,
      transform: `translateX(calc(50% + ${crosshairConfig.innerOffset}px))`,
    },
    top: {
      transform: `translateY(calc(-50% - ${crosshairConfig.innerOffset}px))`,
    },
    bottom: {
      transform: `translateY(calc(50% + ${crosshairConfig.innerOffset}px))`,
    },
  };

  const outerStyles = {
    left: {
      transform: `translateX(calc(-50% - ${crosshairConfig.outerOffset}px))`,
    },
    right: {
      transform: `translateX(calc(50% + ${crosshairConfig.outerOffset}px))`,
    },
    top: {
      transform: `translateY(calc(-50% - ${crosshairConfig.outerOffset}px))`,
    },
    bottom: {
      transform: `translateY(calc(50% + ${crosshairConfig.outerOffset}px))`,
    },
  };

  return <div className="absolute box-content transition-transform"></div>;
}
