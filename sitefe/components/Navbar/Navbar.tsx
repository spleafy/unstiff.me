import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="ue-navbar">
      <Link href="/">
        <div className="ue-navbar__logo">
          <Image src={Logo} />
        </div>
      </Link>
      <div className="ue-navbar__links">
        <Link href="/interviews">
          <span
            className={router.pathname == "/interviews" ? "ue-active-link" : ""}
          >
            Интервюта
          </span>
        </Link>
        <Link href="/recipes">
          <span
            className={router.pathname == "/recipes" ? "ue-active-link" : ""}
          >
            Рецепти
          </span>
        </Link>
        <Link href="/movements">
          <span
            className={router.pathname == "/movements" ? "ue-active-link" : ""}
          >
            Движение
          </span>
        </Link>
        <Link href="/sutras">
          <span
            className={router.pathname == "/sutras" ? "ue-active-link" : ""}
          >
            Сутри
          </span>
        </Link>
      </div>
      <div className="ue-navbar__toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
