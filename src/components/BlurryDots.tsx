"use client";

import React from 'react'
import { useTheme } from "next-themes";

const BlurryDots = () => {
    const { theme } = useTheme();

    if(theme === 'light') return null

    return (
        <div>
            <div className="h-[1000px] w-[1000px] right-light fixed -right-96 -bottom-80"></div>
            <div className="h-[1000px] w-[1000px] left-light fixed -left-96 -top-80"></div>
        </div>
    )
}

export default BlurryDots