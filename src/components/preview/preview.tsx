import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { RenderHTML } from "@/logic/markdown";
import root from "react-shadow";
import { useEditorStore } from "@/stores/editor";
import { useMeasure } from "@uidotdev/usehooks";
import React from "react";

export const ResumePreview = React.forwardRef<HTMLDivElement>((_, ref) => {
    const { markdown, css, hiddenSections } = useEditorStore();
    const [html, setHtml] = useState("");
    const [scale, setScale] = useState("1.0");
    const [scaledWidth, setScaledWidth] = useState("0px");
    const [scaledHeight, setScaledHeight] = useState("0px");

    const [rootRef, { width: rootWidth, height: rootHeight }] = useMeasure();
    const [resumeRef, { width: resumeWidth, height: resumeHeight }] = useMeasure();

    useEffect(() => {
        if (rootWidth && rootHeight && resumeWidth && resumeHeight) {
            const scaleX = rootWidth / resumeWidth;
            const scaleY = rootHeight / resumeHeight;
            const scaleR = Math.min(scaleX, scaleY);
            setScale(`${scaleR}`);
            setScaledWidth(`${(resumeWidth * scaleR).toFixed(2)}px`);
            setScaledHeight(`${(resumeHeight * scaleR).toFixed(2)}px`);
        }
    }, [rootWidth, rootHeight, resumeWidth, resumeHeight]);

    useEffect(() => {
        RenderHTML(markdown, hiddenSections).then((html) => {
            setHtml(html.toString());
        });
    }, [markdown, css, hiddenSections]);

    return (
        <div ref={rootRef} className="h-full flex flex-col justify-center items-center">
            <div className="bg-border">
                <h2 className="p-2 text-xl w-full">Preview</h2>
                <div className="h-full w-full">
                    <root.div style={{ width: scaledWidth, height: scaledHeight }}>
                        <div ref={ref}>
                            <div
                                ref={resumeRef}
                                className="resume"
                                style={{ transformOrigin: "top left", transform: `scale(${scale})` }}
                            >
                                <style type="text/css">{css}</style>
                                <div className="resume-content">{parse(html)}</div>
                            </div>
                        </div>
                    </root.div>
                </div>
            </div>
        </div>
    );
});
