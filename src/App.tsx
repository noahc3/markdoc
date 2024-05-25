import "./App.css";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Editor from "./components/editor/editor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ResumePreview } from "./components/preview/preview";
import { ThemeProvider } from "./components/theme-provider";
import ResumeExport from "./components/editor/export";
import React from "react";

const queryClient = new QueryClient();

function App() {
    const resumeRef = React.createRef<HTMLDivElement>();
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <QueryClientProvider client={queryClient}>
                    <div className="h-screen w-screen">
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel className="p-2">
                                <Tabs defaultValue="edit" className="h-full w-full flex flex-col">
                                    <TabsList className="w-fit">
                                        <TabsTrigger value="edit">Edit</TabsTrigger>
                                        <TabsTrigger value="export">Export</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="edit" className="h-full">
                                        <Editor />
                                    </TabsContent>
                                    <TabsContent value="export">
                                        <ResumeExport resumeRef={resumeRef} />
                                    </TabsContent>
                                </Tabs>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel className="p-4 py-8">
                                <ResumePreview ref={resumeRef} />
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
