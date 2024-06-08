import { GetAllSections, SimpleASTSection } from "@/logic/markdown";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "@tanstack/react-router";

export default function ResumeExport() {
    const [markdown] = useLocalStorage("markdown", "");
    const [hiddenSections, setHiddenSections] = useLocalStorage("hiddenSections", [] as number[]);
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
                className="flex flex-row gap-2 p-0.5 place-items-center"
                style={{ paddingLeft: `${(section.depth - 1) * 20}px` }}
                key={key}
            >
                <Checkbox id={key} checked={section.visible} onCheckedChange={() => toggleSection(index)} />
                <label className="leading-5 text-sm" htmlFor={key}>
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
                    <div className="flex flex-row place-items-center gap-2">
                        <Link
                            to="/preview"
                            search={{
                                print: true
                            }}
                            target="_blank"
                            className="w-fit"
                        >
                            <Button>Print / Export</Button>
                        </Link>
                        <small>
                            The print dialog will open in a separate window to preserve your custom styles.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}
