import React, { useState, useEffect } from "react";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import BottomNavbar from "./components/BottomNavbar";
import DesktopSize from "./components/DesktopSize";
import AddButton from "./components/AddButton";
import ContentSm from "./components/ContentSm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);

  useEffect(() => {
    if (sideMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [sideMenuOpen]);

  //SIDE NAVBAR
  const handleOpenSideMenu = () => {
    setSideMenuOpen(true);
    setClosingAnimation(false);
  };

  const handleClose = () => {
    setClosingAnimation(true);
    setTimeout(() => {
      setSideMenuOpen(false);
    }, 300);
  }; //END SIDE NAVBAR

  //Dark mode setting
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const element = document.querySelector("html").className;
    document.querySelector("html").className = element === "dark" ? "" : "dark";
  };
  return (
    <>
      <div className={`App `}>
        <TopNavbar openSideMenu={handleOpenSideMenu} />
        <BottomNavbar isDarkMode={isDarkMode} />
        <div
          className={`${
            sideMenuOpen
              ? "animate-fade-in  absolute top-0 right-0 h-screen w-1/5 z-10 "
              : "bg-transparent"
          } `}
          onClick={handleClose}
        ></div>
        {sideMenuOpen || closingAnimation ? (
          <SideNavbar
            isOpen={sideMenuOpen}
            onClose={handleClose}
            darkMode={handleDarkMode}
            isDarkMode={isDarkMode}
          />
        ) : null}
      </div>
      <ContentSm darkMode={isDarkMode} />
      <DesktopSize />
      <AddButton />
    </>
  );
}

export default App;
