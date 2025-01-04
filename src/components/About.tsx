'use client'

import { Button } from '@nextui-org/react'
import { Download, Github, Instagram, Linkedin, Send, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className='flex flex-col space-y-10 sm:space-y-20  justify-center items-center text-center mt-10' id='about'>
            <h1 className="font-bold text-3xl leading-relaxed sm:text-7xl" style={{ lineHeight: "1.5" }}>
                <strong>Yasin Karbasi<br />{" "}</strong>
                I'm <span className="text-gradient ">{'<Full Stack />'} </span> Developer
            </h1>
            <div className='flex justify-center items-center space-x-4 sm:space-x-10'>
                <Button className='text-medium p-5' color="danger" variant="shadow" endContent={<User />}>
                    <Link href={'#contact'}>
                        Contact
                    </Link>
                </Button>
                <Button className='text-medium p-5' color="danger" variant="bordered" endContent={<Download />}>
                    <Link href={'#contact'}>
                        Download CV
                    </Link>
                </Button>
            </div>
            <div className='flex space-x-10 sm:space-x-20'>
                <Link href={''}>
                    <Github className='size-8 sm:size-10 hover:text-fuchsia-500' />
                </Link>
                <Link href={''}>
                    <Instagram className='size-8 sm:size-10 hover:text-fuchsia-500' />
                </Link>
                <Link href={''}>
                    <Send className='size-8 sm:size-10 hover:text-fuchsia-500' />
                </Link>
                <Link href={''}>
                    <Linkedin className='size-8 sm:size-10 hover:text-fuchsia-500' />
                </Link>
            </div>
            <div className='space-y-5'>
                <h2 className='title'>About</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas soluta facere, eveniet eaque adipisci, doloribus numquam vel iusto dolore provident totam eos cupiditate dicta! Sint consequuntur tempore fugit laboriosam saepe.</p>
            </div>
        </section>
    )
}

export default About