'use client'

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from 'react'

const Experience = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <div className="space-y-5" id="experience">
            <h2 className="title">Experience</h2>
            <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    subtitle="Press to expand"
                    title="Accordion 1"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    subtitle={
                        <span>
                            Press to expand <strong>key 2</strong>
                        </span>
                    }
                    title="Accordion 2"
                >
                    {defaultContent}
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    subtitle="Press to expand"
                    title="Accordion 3"
                >
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Experience