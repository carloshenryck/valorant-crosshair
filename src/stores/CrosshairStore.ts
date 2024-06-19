import { create } from "zustand";
import { ICrosshair } from "../types";
import { crosshairInitialSettings } from "../constants/crosshairInitialSettings";

interface CrosshairStore {
  crosshairConfig: ICrosshair;
  setCrosshairConfig: (key: keyof ICrosshair, value: string | boolean) => void;
  resetCrosshair: () => void;
}

export const useCrosshairStore = create<CrosshairStore>()((set) => ({
  crosshairConfig: crosshairInitialSettings,
  setCrosshairConfig: (key, value) =>
    set((state) => ({
      crosshairConfig: {
        ...state.crosshairConfig,
        [key]: value,
      },
    })),
  resetCrosshair: () => set({ crosshairConfig: crosshairInitialSettings }),
}));
