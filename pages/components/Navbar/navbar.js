import React from "react";
import Link from "next/link";
import NavStyle from "../../styles/navbar";

const Navbar = () => {
  const menuStyles = NavStyle();

  return (
    <div className={menuStyles.menu}>
      <ul className={menuStyles.ul}>
        <Link href="/">
          <a className={menuStyles.a}>Página Inicial</a>
        </Link>
        <Link href="/edit">
          <a className={menuStyles.a}> Editar </a>
        </Link>
        <Link href="/insert">
          <a className={menuStyles.a}>Inserir</a>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
