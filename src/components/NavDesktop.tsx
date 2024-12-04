import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { routes } from "@/lib/routes";

const NavDesktop = () => {
  return (
    <Navbar>

      <NavbarBrand>
        <Image
          src="/images/banner.png"
          alt="Logo"
          width={300}
          height={40}
          priority
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {routes.map((route) => {
          const { title, path, Icon } = route;
          return (
            <NavbarItem key={title}>
              <Link
                href={path}
                className="text-lg font-semibold text-blue-800 hover:text-blue-600 transition duration-300"
              >
                <div className="flex items-center gap-2">
                  <Icon />
                  {title}
                </div>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>



  );
};

export { NavDesktop };
