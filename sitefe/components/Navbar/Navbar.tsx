import { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [extendedNavbar, setExtendedNavbar] = useState(false);

  let language = "";

  const { query } = useRouter();

  if (query.lang == undefined) {
    language = "bg";
  } else if (query.lang == "bg") {
    language = "bg";
  } else {
    language = "en";
  }

  return (
    <div className="ue-navbar">
      <Link href={"/?lang=" + language} passHref>
        <div className="ue-navbar__logo">
          <Image src={Logo} alt="Logo" />
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
          <Link href={"/interviews?lang=" + language} passHref>
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
          <Link href={"/recipes?lang=" + language} passHref>
            <span
              className={router.pathname == "/recipes" ? "ue-active-link" : ""}
              onClick={() => {
                setExtendedNavbar(false);
              }}
            >
              Рецепти
            </span>
          </Link>
          <Link href={"/movements?lang=" + language} passHref>
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
          <Link href={"/sutras?lang=" + language} passHref>
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
            <Link href={router.pathname + "?lang=bg"} passHref>
              <span
                className={
                  router.query.lang == "bg" || undefined ? "ue-active-link" : ""
                }
              >
                Bg
              </span>
            </Link>
            <div className="separator"></div>
            <Link href={router.pathname + "?lang=en"} passHref>
              <span
                className={router.query.lang == "en" ? "ue-active-link" : ""}
              >
                En
              </span>
            </Link>
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
