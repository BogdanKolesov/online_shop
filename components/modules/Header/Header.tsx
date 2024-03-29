"use client";
import Logo from "@/components/elements/Logo/Logo";
import useLang from "@/hooks/useLang";
import Link from "next/link";
import "@/app/globalStyles/header.css";

export default function Header() {
  const { lang, translations } = useLang();
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger">
          {translations[lang].header.menu_btn}
        </button>
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset">
          <li className="header__links__item ">
            <button className="btn-reset header__links__item__btn header__links__item__btn--search"></button>
          </li>
          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"
            ></Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/compare"
              className="header__links__item__btn header__links__item__btn--compare"
            ></Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/cart"
              className="header__links__item__btn header__links__item__btn--cart"
            ></Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/profile"
              className="header__links__item__btn header__links__item__btn--profile"
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
