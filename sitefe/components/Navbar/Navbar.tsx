import { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [extendedNavbar, setExtendedNavbar] = useState(false);

  return (
    <div className="ue-navbar">
      <Link href="/">
        <div className="ue-navbar__logo">
          <Image src={Logo} />
        </div>
      </Link>
      <div
        className={
          extendedNavbar
            ? "ue-navbar__links ue-navbar__links_extended"
            : "ue-navbar__links"
        }
      >
        <div
          className="ue-navbar__close"
          onClick={() => {
            setExtendedNavbar(false);
          }}
        >
          <div></div>
          <div></div>
        </div>
        <div className="ue-links">
          <Link href="/interviews">
            <span
              className={
                router.pathname == "/interviews" ? "ue-active-link" : ""
              }
              onClick={() => {
                setExtendedNavbar(false);
              }}
            >
              Интервюта
            </span>
          </Link>
          <Link href="/recipes">
            <span
              className={router.pathname == "/recipes" ? "ue-active-link" : ""}
              onClick={() => {
                setExtendedNavbar(false);
              }}
            >
              Рецепти
            </span>
          </Link>
          <Link href="/movements">
            <span
              className={
                router.pathname == "/movements" ? "ue-active-link" : ""
              }
              onClick={() => {
                setExtendedNavbar(false);
              }}
            >
              Движение
            </span>
          </Link>
          <Link href="/sutras">
            <span
              className={router.pathname == "/sutras" ? "ue-active-link" : ""}
              onClick={() => {
                setExtendedNavbar(false);
              }}
            >
              Сутри
            </span>
          </Link>
          <div className="language-links">
            <span
              onClick={() => {
                localStorage.setItem("language", "en");
              }}
            >
              En
            </span>
            <div className="separator"></div>
            <span
              onClick={() => {
                localStorage.setItem("language", "bg");
              }}
            >
              Bg
            </span>
          </div>
        </div>
      </div>
      <div
        className="ue-navbar__toggle"
        onClick={() => {
          setExtendedNavbar(true);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
