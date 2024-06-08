import { ResumePreview } from "@/components/preview/preview";
import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect } from "react";
import "./preview.css";
import { useReactToPrint } from "react-to-print";
import { useLocalStorage } from "@uidotdev/usehooks";

type PreviewQueryParams = {
    print: boolean;
};

export const Route = createFileRoute("/preview")({
    component: Preview,
    validateSearch: (search: Record<string, unknown>): PreviewQueryParams => {
        return {
            print: Boolean(search?.print ?? false)
        };
    }
});

function Preview() {
    const resumeRef = React.createRef<HTMLDivElement>();
    const { print } = Route.useSearch();
    const [css] = useLocalStorage("css", "");

    const handlePrint = useReactToPrint({
        documentTitle: "Resume",
        content: () => resumeRef.current,
        onAfterPrint: () => window.close(),
        removeAfterPrint: true,
        copyStyles: false,
        pageStyle: css + " .resume-content { overflow: visible; }",
        bodyClass: ""
    });

    useEffect(() => {
        if (print) {
            window.setTimeout(handlePrint, 100);
        }
    }, [handlePrint, resumeRef, print]);

    return (
        <>
            <style type="text/css">{css}</style>
            <ResumePreview ref={resumeRef} />
        </>
    );
}
