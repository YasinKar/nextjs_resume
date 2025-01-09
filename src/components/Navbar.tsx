"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({ fullName }: { fullName: string }) => {
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);


  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    { label: 'About', path: '#about' },
    { label: 'Skills', path: '#skills' },
    { label: 'Projects', path: '#projects' },
    { label: 'Experience', path: '#experience' },
    { label: 'Education', path: '#education' },
    { label: 'Languages', path: '#languages' },
    { label: 'Contact', path: '#contact' },
  ];

  return (
    <NavbarUI onMenuOpenChange={setIsMenuOpen} position="sticky">
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-large">{fullName}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={currentHash === item.path}
          >
            <Link color={currentHash === item.path ? 'danger' : 'foreground'} href={item.path}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem isActive={currentHash === item.path} key={`${item}-${index}`}>
            <Link
              className="text-2xl font-medium"
              color={currentHash === item.path ? 'danger' : 'foreground'}
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
}

export default Navbar