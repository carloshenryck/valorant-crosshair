import { useEffect, useState } from "react";
import { readCrosshairCode } from "./utils/readCrosshairCode";
import CrosshairSettings from "./components/CrosshairSettings";
import CrosshairPreview from "./components/CrosshairPreview";
import { useCrosshairStore } from "./stores/CrosshairStore";

const App: React.FC = () => {
  const { crosshairConfig } = useCrosshairStore();
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    console.log(crosshairConfig);
  }, [crosshairConfig]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black flex-col gap-12">
      <CrosshairPreview />
      <CrosshairSettings />
      <div className="flex gap-2">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-white h-8"
          onClick={() => readCrosshairCode(inputText)}
        >
          Converter em objeto
        </button>
      </div>
    </div>
  );
};

export default App;
