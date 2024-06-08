import { defaultMarkdown } from "@/stores/defaults";
import { useEditorStore } from "@/stores/editor";
import { Editor } from "@monaco-editor/react";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useLocalStorage("markdown", defaultMarkdown);
    const [editorFontSize] = useLocalStorage("editorFontSize", 12);

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
