"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <NavbarBrand />

      <div className="flex md:order-2">
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={pathname === "/"}>
          Who
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/pages/why"
          active={pathname === "/pages/why"}
        >
          Why
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/pages/funfacts"
          active={pathname === "/pages/funfacts"}
        >
          Fun Facts
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/pages/Works"
          active={pathname === "/pages/Works"}
        >
          Works
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
