import { GetAllSections, SimpleASTSection } from "@/logic/markdown";
import { useEditorStore } from "@/stores/editor";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import ReactToPrint from "react-to-print";

export default function ResumeExport(props: { resumeRef: React.RefObject<HTMLDivElement> }) {
    const { markdown, hiddenSections, setHiddenSections } = useEditorStore();
    const [sections, setSections] = useState<SimpleASTSection[]>([]);

    function toggleSection(index: number) {
        console.log(index);
        const secIndex = sections[index].index;
        if (hiddenSections.includes(secIndex)) {
            setHiddenSections(hiddenSections.filter((x) => x !== secIndex));
        } else {
            setHiddenSections([...hiddenSections, secIndex]);
        }

        const newSections = [...sections];
        newSections[index].visible = !newSections[index].visible;
        setSections(newSections);
    }

    useEffect(() => {
        const sections = GetAllSections(markdown);
        for (const section of sections) {
            section.visible = true;
        }
        setSections(sections);
    }, [markdown]);

    const checkboxes = sections.map((section, index) => {
        const key = `cbsec-${section.index}`;
        return (
            <div
                className="flex flex-row gap-2 h-6"
                style={{ paddingLeft: `${(section.depth - 1) * 20}px` }}
                key={key}
            >
                <Checkbox id={key} checked={section.visible} onCheckedChange={() => toggleSection(index)} />
                <label className="leading-[15px] h-4" htmlFor={key}>
                    {section.text}
                </label>
            </div>
        );
    });

    return (
        <div>
            <div className="flex flex-col h-full pt-2">
                <h2 className="p-2 text-xl bg-border">Export Options</h2>
                <div className="flex-grow flex flex-col gap-2 bg-content p-2">
                    <div>
                        <h3 className="text-md font-bold">Hide Sections</h3>
                        <div className="px-4 py-2">{checkboxes}</div>
                    </div>
                    <hr />
                    <div>
                        <ReactToPrint
                            trigger={() => {
                                return <Button>Print to PDF</Button>;
                            }}
                            content={() => props.resumeRef.current}
                            copyStyles={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
