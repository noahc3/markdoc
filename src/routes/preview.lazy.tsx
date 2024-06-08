import { ResumePreview } from "@/components/preview/preview";
import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect } from "react";
import "./preview.css";
import { useReactToPrint } from "react-to-print";

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

    const handlePrint = useReactToPrint({
        documentTitle: "Resume",
        content: () => resumeRef.current,
        onAfterPrint: () => window.close(),
        removeAfterPrint: true,
        copyStyles: false,
        pageStyle: "",
        bodyClass: ""
    });

    useEffect(() => {
        if (print) {
            window.setTimeout(handlePrint, 100);
        }
    }, [handlePrint, resumeRef, print]);

    return (
        <>
            <ResumePreview ref={resumeRef} />
        </>
    );
}
