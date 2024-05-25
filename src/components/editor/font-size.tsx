import { useEditorStore } from "@/stores/editor";
import { Slider } from "../ui/slider";
import { RiFontSize } from "react-icons/ri";

export default function FontSizeSlider() {
    const { editorFontSize, setEditorFontSize } = useEditorStore();

    return (
        <div className="flex flex-row items-center gap-2 text-sm">
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