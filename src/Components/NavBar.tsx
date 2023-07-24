import React, { useEffect, useState } from "react";
import MobileVersionNavBar from "./MobileVersionNavBar";
import DesktopVersionNavBar from "./DesktopVersionNavBar";

export default function NavBar( setOpen,
    open,
    setOpen
  }: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? (
        <MobileVersionNavBar setOpen={setOpen} open={open}>Mobile Navigation Bar</MobileVersionNavBar>
      ) : (
        <DesktopVersionNavBar>Desktop Navigation Bar</DesktopVersionNavBar>
      )}
    </header>
  );
}
