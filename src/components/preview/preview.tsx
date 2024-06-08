import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { RenderHTML } from "@/logic/markdown";
import root from "react-shadow";
import { useEditorStore } from "@/stores/editor";
import { useLocalStorage, useMeasure } from "@uidotdev/usehooks";
import React from "react";

export const ResumePreview = React.forwardRef<HTMLDivElement>((_, ref) => {
    const [markdown] = useLocalStorage("markdown", "");
    const [css] = useLocalStorage("css", "");
    const [hiddenSections] = useLocalStorage("hiddenSections", []);
    const [html, setHtml] = useState("");

    useEffect(() => {
        RenderHTML(markdown, hiddenSections).then((html) => {
            setHtml(html.toString());
        });
    }, [markdown, css, hiddenSections]);

    return (
        <div ref={ref}>
            <style type="text/css">{css}</style>
            <div className="resume">
                <div className="resume-content">{parse(html)}</div>
            </div>
        </div>
    );
});
