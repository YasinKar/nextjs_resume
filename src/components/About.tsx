'use client'

import { Button } from '@nextui-org/react'
import { Download, Github, Instagram, Linkedin, Send, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type AboutProp = {
    fullName: string,
    profession: string,
    resumeFile: string,
    github: string,
    instagram: string,
    telegram: string,
    likedin: string,
    about: string
}

const About: React.FC<AboutProp> = ({fullName, profession, resumeFile, github, instagram, telegram, likedin, about}) => {
    return (
        <div className='section flex flex-col mt-10' id='about'>
            <h1 className="font-bold text-3xl leading-relaxed sm:text-7xl" style={{ lineHeight: "1.5" }}>
                <strong>{fullName}<br />{" "}</strong>
                I&apos;m <span className="text-gradient ">{`< ${profession} />`} </span> Developer
            </h1>
            <div className='flex justify-center items-center space-x-4 sm:space-x-10'>
                <Button className='text-medium p-5' color="danger" variant="shadow" endContent={<User />}>
                    <Link href={'#contact'}>
                        Contact
                    </Link>
                </Button>
                <Button className='text-medium p-5' color="danger" variant="bordered" endContent={<Download />}>
                    <Link href={resumeFile}>
                        Download CV
                    </Link>
                </Button>
            </div>
            <div className='flex space-x-10 sm:space-x-20'>
                <Link href={github}>
                    <Github className='size-8 sm:size-10 hover:text-danger' />
                </Link>
                <Link href={instagram}>
                    <Instagram className='size-8 sm:size-10 hover:text-danger' />
                </Link>
                <Link href={telegram}>
                    <Send className='size-8 sm:size-10 hover:text-danger' />
                </Link>
                <Link href={likedin}>
                    <Linkedin className='size-8 sm:size-10 hover:text-danger' />
                </Link>
            </div>
            <div className='space-y-5'>
                <h2 className='title'>About</h2>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default About