import { useEffect, useState } from "react";
import { readCrosshairCode } from "./utils/readCrosshairCode";
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
      <div className="flex gap-2">
        <textarea
          className="w-96 h-44 resize-none"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-white h-8 px-2"
          onClick={() => readCrosshairCode(inputText)}
        >
          Generate Crosshair
        </button>
      </div>
    </div>
  );
};

export default App;
