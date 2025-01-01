"use client";

import React from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher: React.FC = (props) => {
  const { theme, setTheme } = useTheme();

  const {
    Component,
    slots,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()} onClick={toggleTheme}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {theme === "dark" ? <Sun/> : <Moon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitcher;