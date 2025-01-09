'use client'

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from 'react'


type ExperienceProps = {
    experiences: { id: number, title: string, description: string }[]
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <div className="section" id="experience">
            <h2 className="title">Experience</h2>
            <Accordion defaultExpandedKeys={["1"]}>
                {
                    experiences.map(experience => (
                        <AccordionItem
                            key={experience.id}
                            aria-label={experience.title}
                            subtitle="Press to expand"
                            title={experience.title}
                        >
                            {experience.description}
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}

export default Experience