import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

import { routes } from "@/lib/routes";

const NavMobile = () => {


  return (
    <Navbar isBordered disableAnimation>

      <NavbarContent className="" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <p className="font-bold text-inherit text-blue-800">CANDYSUR</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {routes.map((route, idx) => {
          return (
            <NavbarMenuItem key={idx}>
              <Link
                color="foreground"
                href={route.path}
                className="w-full flex items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <route.Icon />
                  {route.title}
                </div>
              </Link>

            </NavbarMenuItem>
          );
        })}

      </NavbarMenu>

    </Navbar>

  );
};

export { NavMobile };
