'use client'

import { Input, Button, Textarea } from '@nextui-org/react';
import React, { useState } from 'react'
import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import Form from 'next/form'

type ContactProps = {
    github: string,
    instagram: string,
    telegram: string,
    likedin: string,
    email: string
}

const Contact: React.FC<ContactProps> = ({ email, github, instagram, likedin, telegram }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<{ type: "success" | "danger", message: string } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        const fullName = formData.get("fullName")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const title = formData.get("title")?.toString() || "";
        const message = formData.get("message")?.toString() || "";

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, email, title, message }),
            });

            if (res.ok) {
                console.log(res);
                setResponse({
                    type: 'success',
                    message: 'Your message was successfully sent!'
                });
            } else {
                setResponse({
                    type: 'danger',
                    message: 'Something went wrong. Please try again.'
                });
            }
        } catch (error: any) {
            setResponse({
                type: 'danger',
                message: 'Server error. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='section' id='contact'>
            <h2 className='title'>Contact</h2>
            <div className='flex flex-col sm:flex-row justify-around items-center gap-14'>
                <Form action={handleSubmit} className='w-full space-y-5'>
                    <Input label="Full Name" name='fullName' type="text" variant={'underlined'} required />
                    <Input label="Email" name='email' type="email" variant={'underlined'} required />
                    <Input label="Title" name='title' type="text" variant={'underlined'} required />
                    <Textarea
                        label="Description"
                        variant={'underlined'}
                        name='message'
                        required
                    />
                    <Button color="default" variant="bordered" type='submit' fullWidth disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>

                {response && 
                    ''
                }

                <div className='flex flex-col justify-center items-center gap-10 w-full'>
                    <p className='flex justify-center items-center gap-2 text-lg'>
                        <Mail />
                        {email}
                    </p>
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
                </div>
            </div>
        </div>
    )
}

export default Contact
