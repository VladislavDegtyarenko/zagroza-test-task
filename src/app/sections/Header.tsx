"use client";

import Container from "../ui/Container";
import LogoIcon from "./assets/LogoIcon";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";

const Header = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(1024);

  const handleViewportWidth = () => {
    setViewportWidth(window?.innerWidth || 0);
  };

  useEffect(() => {
    if (viewportWidth) {
      handleViewportWidth();
    }

    if (!window) return;

    window.addEventListener("resize", handleViewportWidth);

    return () => window && window.removeEventListener("resize", handleViewportWidth);
  }, []);
  return (
    <header className="fixed w-full z-10 bg-white color-black py-4 drop-shadow-md">
      <Container>
        <div className="flex justify-between items-center">
          <LogoIcon />
          {viewportWidth > 991 ? <Nav /> : null}
        </div>
      </Container>
    </header>
  );
};

export default Header;
