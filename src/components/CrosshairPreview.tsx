import { useCrosshairStore } from "../stores/CrosshairStore";

export default function CrosshairPreview() {
  const { crosshairConfig } = useCrosshairStore();

  return (
    <div className="crosshair-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "1rem",
            height: "0.2rem",
            backgroundColor: crosshairConfig.hexColorValue,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "0.2rem",
              height: "1rem",
              backgroundColor: crosshairConfig.hexColorValue,
            }}
          />
          <div
            style={{
              width: "0.2rem",
              height: "1rem",
              backgroundColor: crosshairConfig.hexColorValue,
            }}
          />
        </div>
        <div
          style={{
            width: "1rem",
            height: "0.2rem",
            backgroundColor: crosshairConfig.hexColorValue,
          }}
        />
      </div>
    </div>
  );
}
