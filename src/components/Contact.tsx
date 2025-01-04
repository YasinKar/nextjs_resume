'use client'

import { Input, Button, Textarea } from '@nextui-org/react';
import { Contact as ContactType } from '@/types/contact.type'
import React, { useState } from 'react'
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    const [form, setForm] = useState<ContactType>({
        fullName: '',
        email: '',
        title: '',
        message: '',
        date: new Date
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form);

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        console.log(form);

    };

    return (
        <div className='text-center space-y-5 pb-20' id='contact'>
            <h2 className='title'>Contact</h2>
            <div className='flex flex-col sm:flex-row justify-around items-center gap-14'>
                <form onSubmit={handleSubmit} className='w-full space-y-5'>
                    <Input isClearable onClear={() => setForm(prev => ({ ...prev, fullName: '' }))} label="Full Name" name='fullName' type="text" variant={'underlined'} onChange={handleChange} value={form.fullName} />
                    <Input isClearable onClear={() => setForm(prev => ({ ...prev, email: '' }))} label="Email" name='email' type="email" variant={'underlined'} onChange={handleChange} value={form.email} />
                    <Input isClearable onClear={() => setForm(prev => ({ ...prev, title: '' }))} label="Title" name='title' type="text" variant={'underlined'} onChange={handleChange} value={form.title} />
                    <Textarea
                        label="Description"
                        variant={'underlined'}
                        isClearable onClear={() => setForm(prev => ({ ...prev, message: '' }))}
                    />
                    <Button color="default" variant="bordered" type='submit' fullWidth>
                        Submit
                    </Button>
                </form>
                <div className='flex flex-col justify-center items-center gap-10 w-full'>
                    <p className='flex justify-center items-center gap-2 text-lg'>
                        <Mail />
                        yasinkardev@gmail.com
                    </p>
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
                </div>
            </div>
        </div>
    )
}

export default Contact
