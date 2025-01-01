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

const Navbar = () => {
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
    { label: 'Languages', path: '#languages' },
    { label: 'Work Experience', path: '#work' },
    { label: 'Education', path: '#education' },
    { label: 'Contact', path: '#contact' },
  ];

  return (
    <NavbarUI onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-large">Yasin Karbasi</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={currentHash === item.path}>
            <Link color={currentHash === item.path ? 'primary' : 'foreground'} href={item.path}>
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
              className="w-full"
              color={currentHash === item.path ? 'primary' : 'foreground'}
              href={item.path}
              size="lg"
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