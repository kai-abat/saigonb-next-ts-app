"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import {
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { usePathname } from "next/navigation";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

interface Menu {
  name: string;
  to: string;
  icon: React.JSX.Element;
}

const menuItems: Menu[] = [
  { name: "Home", to: "/", icon: <HiOutlineHome /> },
  { name: "Menu", to: "/menu", icon: <HiOutlineRocketLaunch /> },
  { name: "About Us", to: "/aboutus", icon: <HiOutlineRocketLaunch /> },
  { name: "Contact Us", to: "/contactus", icon: <HiOutlinePhone /> },
];

const Header = () => {
  const asPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isLinkActive(currentPath: string): boolean {
    const paths: string[] = asPath.split("/");
    const startPath = "/" + paths.at(1);
    return currentPath === startPath;
  }

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        base: ["justify-evenly"],

        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        wrapper: ["px-4"],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={isLinkActive(item.to)}>
            <Link color="foreground" href={item.to}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className=" text-3xl text-stone-900 dark:text-stone-200"
          >
            <IoLogoFacebook />
          </Link>
          <Link
            href="#"
            className=" text-3xl text-stone-900 dark:text-stone-200"
          >
            <IoLogoInstagram />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className=" gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full flex gap-2"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.to}
              size="lg"
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            color="secondary"
            href="#"
            variant="flat"
            fullWidth
            onPress={() => setIsMenuOpen(false)}
          >
            Login
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            fullWidth
            onPress={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
