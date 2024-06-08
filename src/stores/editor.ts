import { create } from "zustand";
import { defaultCSS, defaultMarkdown } from "./defaults";

interface EditorState {
    css: string
    setCSS: (css: string) => void
    markdown: string
    setMarkdown: (markdown: string) => void
    editorFontSize: number
    setEditorFontSize: (editorFontSize: number) => void
    hiddenSections: number[]
    setHiddenSections: (exportHiddenSections: number[]) => void
}

export const useEditorStore = create<EditorState>( (set) => {
    const initialMarkdown = localStorage.getItem('markdown') || defaultMarkdown;
    const initialCSS = localStorage.getItem('css') || defaultCSS;
    const initialFontSize = parseInt(localStorage.getItem('editorFontSize') ?? '12');

    function setMarkdown(markdown: string) {
        localStorage.setItem('markdown', markdown);
        set({ markdown });
    }

    function setCSS(css: string) {
        localStorage.setItem('css', css);
        set({ css });
    }

    function setEditorFontSize(editorFontSize: number) {
        localStorage.setItem('editorFontSize', editorFontSize.toString());
        set({ editorFontSize });
    }

    function setHiddenSections(hiddenSections: number[]) {
        localStorage.setItem('hiddenSections', JSON.stringify(hiddenSections));
        set({ hiddenSections });
    }

    return {
        css: initialCSS,
        setCSS: setCSS,
        markdown: initialMarkdown,
        setMarkdown: setMarkdown,
        editorFontSize: initialFontSize,
        setEditorFontSize: setEditorFontSize,
        hiddenSections: [],
        setHiddenSections: setHiddenSections
    }

} )