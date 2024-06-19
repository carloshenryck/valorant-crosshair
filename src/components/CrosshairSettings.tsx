import { useCrosshairStore } from "../stores/CrosshairStore";

export default function CrosshairSettings() {
  const { crosshairConfig, setCrosshairConfig } = useCrosshairStore();

  return (
    <div className="flex flex-col gap-2 text-white">
      <input
        type="color"
        value={crosshairConfig.hexColorValue}
        onChange={(e) => setCrosshairConfig("hexColorValue", e.target.value)}
      />
    </div>
  );
}
