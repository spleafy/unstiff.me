import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="ue-navbar">
      <div className="ue-navbar__logo">
        <Image src={Logo} />
      </div>
      <div className="ue-navbar__links">
        <span>Интервюта</span>
        <span>Рецепти</span>
        <span>Движение</span>
        <span>Сутри</span>
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
