import { Slider } from "../ui/slider";
import { RiFontSize } from "react-icons/ri";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function FontSizeSlider() {
    const [editorFontSize, setEditorFontSize] = useLocalStorage("editorFontSize", 12);

    return (
        <div className="flex flex-row items-center gap-2 text-sm h-5">
            <RiFontSize />
            <div className="w-36">
                <Slider
                    defaultValue={[editorFontSize]}
                    min={8}
                    max={24}
                    step={1}
                    onValueChange={(value) => {
                        setEditorFontSize(value[0]);
                    }}
                />
            </div>
            <span>{editorFontSize}px</span>
        </div>
    );
}
