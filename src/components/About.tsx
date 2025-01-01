'use client'

import { Button } from '@nextui-org/react'
import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className='flex flex-col space-y-10 justify-center items-center text-center mt-10' id='about'>
            <h1 className="font-bold text-4xl sm:text-7xl">
                Yasin Karbasi<br />{" "}
                I'm <span className="text-gradient">{'<Full Stack />'} </span> Developer
            </h1>
            <div>
            
                <Button className='text-medium p-5' color="danger" variant="shadow" endContent={<User />}>
                    <Link href={'#contact'}>
                        Contact
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default About