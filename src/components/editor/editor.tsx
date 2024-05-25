import MarkdownEditor from "./md-editor";
import CSSEditor from "./css-editor";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import FontSizeSlider from "./font-size";
import { useEffect } from "react";
import { useEditorStore } from "@/stores/editor";

export default function Editor() {
    const { setHiddenSections } = useEditorStore();

    useEffect(() => {
        setHiddenSections([]);
    }, [setHiddenSections]);

    return (
        <div className="h-full flex flex-col gap-2">
            <ResizablePanelGroup className="h-full" direction="vertical">
                <ResizablePanel>
                    <div className="flex flex-col h-full pb-2">
                        <h2 className="p-2 text-xl bg-border">MD</h2>
                        <div className="flex-grow">
                            <MarkdownEditor />
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                    <div className="flex flex-col h-full pt-2">
                        <h2 className="p-2 text-xl bg-border">CSS</h2>
                        <div className="flex-grow">
                            <CSSEditor />
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
            <FontSizeSlider />
        </div>
    );
}
