import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkMode/DarkModeToggle"


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

  return (
    <nav id={style.navbar}>
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
      <div>
        {/* <ul id={"navbar-list"}>
          {paths.map((path) => (
            <li key={path.path}>
              <Link href={path.path}>
                <h2>{path.name}</h2>
              </Link>
            </li>
          ))}
        </ul> */}
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
      </div>
      <div style={{marginRight: 10}}>
        <DarkModeToggle/>
      </div>
    </nav>
  );
}
