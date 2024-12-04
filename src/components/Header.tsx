"use client";

import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

import { Button } from "./Button";
import { NavMobile } from "./NavMobile";
import { NavDesktop } from "./NavDesktop";
//import { useMediaQuery } from "react-responsive";
//import { setUser } from "../store/userSlice";

const Header = () => {
  //const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [btnText, setBtnText] = useState("Login");
  // const user = useSelector((state: any) => state.user);
  //const dispatch = useDispatch();
  //const navigate = useNavigate();
  /*
    useEffect(() => {
      if (user?.user) {
        setBtnText(user.user.username);
      } else {
        setBtnText("Login");
      }
    }, [user]);
  */
  const handleLogin = () => {
    /*
     if (user?.user) {
       dispatch(setUser(null));
       localStorage.removeItem("token");
     } else {
       navigate("/login");
     }
       */
  };

  return (
    <header className="bg-blue-400 py-1 md:py-2">
      <div className="flex items-center justify-between px-4 md:px-6 gap-4">

        {/* Mostrar NavMobile solo en pantallas pequeñas */}
        <div className="sm:hidden">
          <NavMobile />
        </div>

        {/* Mostrar NavDesktop solo en pantallas grandes */}
        <div className="hidden sm:flex w-full">
          <NavDesktop />
        </div>

        <Button onClick={handleLogin} text={btnText} isActive={true} />

      </div>
    </header>

  );
};

export { Header };
