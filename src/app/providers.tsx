"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

    return (
        <NextUIProvider className={theme}>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
            </NextThemesProvider>
        </NextUIProvider >
    )
}