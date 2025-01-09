'use client'

import { Avatar } from '@nextui-org/react'
import React from 'react'

type SkillsProps = {
    skills: { id: number, image: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className='section' id='skills'>
            <h2 className='title'>Skills</h2>
            <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center'>
                {
                    skills.map(skill => (
                        <Avatar key={skill.id} isBordered radius="md" src={skill.image} className='sm:h-16 sm:w-16 bg-white p-1' />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills