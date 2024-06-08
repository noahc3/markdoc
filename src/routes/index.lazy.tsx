import "./index.css";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Editor from "@/components/editor/editor";
import { ResumePreview } from "@/components/preview/preview";

import ResumeExport from "@/components/editor/export";
import React, { useEffect, useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import FontSizeSlider from "@/components/editor/font-size";

export const Route = createLazyFileRoute("/")({
    component: Index
});

function Index() {
    const [containerRef, { width: containerWidth, height: containerHeight }] = useMeasure();
    const [iframeRef, { width: iframeWidth, height: iframeHeight }] = useMeasure();

    const [scale, setScale] = useState("1.0");
    const [scaledWidth, setScaledWidth] = useState("0px");
    const [scaledHeight, setScaledHeight] = useState("0px");

    useEffect(() => {
        if (containerWidth && containerHeight && iframeWidth && iframeHeight) {
            const scaleX = containerWidth / iframeWidth;
            const scaleY = containerHeight / iframeHeight;
            const scaleR = Math.min(scaleX, scaleY);
            setScale(`${scaleR}`);
            setScaledWidth(`${(iframeWidth * scaleR).toFixed(2)}px`);
            setScaledHeight(`${(iframeHeight * scaleR).toFixed(2)}px`);
        }
    }, [containerWidth, containerHeight, iframeWidth, iframeHeight]);
    return (
        <>
            <div className="h-screen w-screen">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel className="p-2">
                        <Tabs defaultValue="edit" className="h-full w-full flex flex-col">
                            <TabsList className="w-fit h-9">
                                <TabsTrigger value="edit">Edit</TabsTrigger>
                                <TabsTrigger value="export">Export</TabsTrigger>
                            </TabsList>
                            <TabsContent value="edit" className="h-full">
                                <Editor />
                            </TabsContent>
                            <TabsContent value="export">
                                <ResumeExport />
                            </TabsContent>
                        </Tabs>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel className="p-2">
                        <div className="h-full flex flex-col gap-2">
                            <div className="h-9"></div>
                            <div className="flex flex-grow flex-col h-full bg-content">
                                <h2 className="p-2 text-xl bg-border">Preview</h2>
                                <div
                                    ref={containerRef}
                                    className="flex flex-col justify-center place-items-center flex-grow"
                                >
                                    <div
                                        style={{
                                            width: scaledWidth,
                                            height: scaledHeight
                                        }}
                                    >
                                        <div
                                            ref={iframeRef}
                                            style={{
                                                width: "8.5in",
                                                height: "11in",
                                                transform: `scale(${scale})`,
                                                transformOrigin: "top left"
                                            }}
                                        >
                                            <iframe className="w-full h-full" src="/preview"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-5"></div>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </>
    );
}
