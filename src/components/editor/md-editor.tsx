import { useEditorStore } from "@/stores/editor";
import { Editor } from "@monaco-editor/react";

export default function MarkdownEditor() {
    const { markdown, setMarkdown, editorFontSize } = useEditorStore();

    return (
        <Editor
            language="markdown"
            theme="vs-dark"
            value={markdown}
            onChange={(value) => {
                setMarkdown(value ?? "");
            }}
            options={{ fontSize: editorFontSize }}
        />
    );
}
