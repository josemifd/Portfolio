import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Button} from "@nextui-org/react";

import { useEffect, useState } from "react";

const NavBarComponent = ({page}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bold, setBold] = useState("")

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-[100vw]"
    >
      <NavbarContent className="sm:hidden flex" justify="center">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 justify-center" 
        style={{ justifyContent: "center",}}
      >
        <NavbarItem isActive={bold == "menu"}>
          <Link 
            href="#proyectos"
            className="text-white text-[1.25rem]" aria-current="page">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem isActive={bold == "crear"}>
          <Link 
            href="#educacion"
            className="text-white text-[1.25rem]" 
            aria-current="page"
          >
            Educación
          </Link>
        </NavbarItem>
        <NavbarItem isActive={bold == "talleres"}>
          <Link 
            href="#habilidades"
            className="text-white text-[1.25rem]" 
            aria-current="page">
            Habilidades
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            href="#proyectos"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Proyectos            
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            href="#educacion"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Educación            
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-white"
            href="#habilidades"
            onClick={() => setIsMenuOpen(false)}
            size="lg"
          >
            Habilidades            
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBarComponent