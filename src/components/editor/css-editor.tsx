import { defaultCSS } from "@/stores/defaults";
import { useEditorStore } from "@/stores/editor";
import { Editor } from "@monaco-editor/react";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function CSSEditor() {
    const [css, setCSS] = useLocalStorage("css", defaultCSS);
    const [editorFontSize] = useLocalStorage("editorFontSize", 12);

    return (
        <Editor
            language="css"
            theme="vs-dark"
            value={css}
            onChange={(value) => {
                setCSS(value ?? "");
            }}
            options={{ fontSize: editorFontSize }}
        />
    );
}
