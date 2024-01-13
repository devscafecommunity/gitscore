import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkMode/DarkModeToggle"
import { useState, useEffect } from "react";

// Style
import style from "./navbar.module.css";


export default function Navbar() {
  let paths = [
    {
      path: "/newer",
      name: "Posts Recentes",
    },
    {
      path: "https://devscafe.vercel.app/",
      name: "Dev's Café",
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest(`.${style.mobileMenu}` )) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header id={style.header}>
      <div className={style.mobileMenu} onClick={!isMobileMenuOpen ? openMobileMenu : closeMobileMenu }>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav id={style.navbar} className={`${isMobileMenuOpen ? style.active : ""}`}>
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                id={style["navbar-logo"]}
              />
            </Link>
          </div>
          <div id={style["navbar-list"]}>
            {paths.map((path) => (
              <div key={path.path}>
                <Link href={path.path}
                  style={{
                    textDecoration: "none",
                    color: "var(--text-primary)",
                  }}
                >
                  <h2>{path.name}</h2>
                </Link>
              </div>
            ))}
          </div>
          <div className={style.darkModeButton}>
            <DarkModeToggle />
          </div>
      </nav>
    </header>
  );
}
