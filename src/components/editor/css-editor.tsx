import { useEditorStore } from "@/stores/editor";
import { Editor } from "@monaco-editor/react";

export default function CSSEditor() {
    const { css, setCSS, editorFontSize } = useEditorStore();

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
