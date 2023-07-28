import React, { useEffect, useState } from "react";
import MobileVersionNavBar from "./MobileVersionNavBar";
import DesktopVersionNavBar from "./DesktopVersionNavBar";

export default function NavBar({
  setOpen,
  open,
  handleLinkClick,
  navigate,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleLinkClick: () => void;
  navigate: () => void;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileVersionNavBar
          setOpen={setOpen}
          open={open}
          handleLinkClick={handleLinkClick}
          navigate={navigate}
        />
      ) : (
        <DesktopVersionNavBar navigate={navigate} />
      )}
    </>
  );
}
