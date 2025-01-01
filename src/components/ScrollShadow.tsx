"use client";

import React from 'react'
import { ScrollShadow as ScrollShadowUI } from "@nextui-org/react";

const ScrollShadow = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollShadowUI className="container relative h-full hide-scrollbar">
            {children}
        </ScrollShadowUI>
    )
}

export default ScrollShadow