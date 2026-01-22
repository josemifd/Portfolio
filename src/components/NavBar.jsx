import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Button} from "@nextui-org/react";

import { useEffect, useState } from "react";

const NavBarComponent = ({page}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bold, setBold] = useState("");

  const menuItems = [
    {
      name: "Proyectos",
      href: "#proyectos"
    },
    {
      name: "Experiencia",
      href: "#experiencia"
    },
    {
      name: "Educación",
      href: "#educacion"
    },
    {
      name: "Habilidades",
      href: "#habilidades"
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full"
    >
      <NavbarContent className="sm:hidden flex" justify="center">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent 
        className="hidden sm:flex gap-4 justify-center" 
        style={{ justifyContent: "center",}}
      >
        {menuItems.map((m, idx) => (
          <NavbarItem>
            <Link href={m.href} className="text-white text-[1.25rem]" aria-current="page">
              {m.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((m, idx) => (
          <NavbarMenuItem>
            <Link
              className="w-full text-white"
              href={m.href}
              onClick={() => setIsMenuOpen(false)}
              size="lg"
            >
              {m.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBarComponent