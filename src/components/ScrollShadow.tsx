"use client";

import React from 'react'
import { ScrollShadow as ScrollShadowUI } from "@nextui-org/react";

const ScrollShadow = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollShadowUI className='relative container space-y-10 sm:space-y-20'>
            {children}
        </ScrollShadowUI>
    )
}

export default ScrollShadow