import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const moviePoint = "/movie/";
  const showPoint = "/tv/";

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log(t);
  };
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>
          <img src={Logo} alt="Logotype" className="logotype" />
        </Link>
        <ul className="navbar-ul">
          <li className="navbar-ul-li">
            {t("movies")}
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "popular"}
              >
                <li>{t("popular")}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "now_playing"}
              >
                <li>{t('now_playing')}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "upcoming"}
              >
                <li>{t('upcoming')}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={moviePoint + "top_rated"}
              >
                <li>{t('top_rated')}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t('tv_show')}
            <ul className="navbar-ul-ul">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "popular"}
              >
                <li>{t('popular')}</li>
              </Link>
              <Link
                to={showPoint + "airing_today"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t('airing_today')}</li>
              </Link>
              <Link
                to={showPoint + "on_the_air"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t('on_tv')}</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={showPoint + "top_rated"}
              >
                <li>{t('on_tv')}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t('people')}
            <ul className="navbar-ul-ul2">
              <Link
                to={"/person"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>{t('poular_people')}</li>
              </Link>
            </ul>
          </li>
          <li className="navbar-ul-li">
            {t('more')}
            <ul className="navbar-ul-ul">
              <li>{t('discussions')}</li>
              <li>{t('leader_board')}</li>
              <li>{t('support')}</li>
              <li>API</li>
            </ul>
          </li>
        </ul>
        <button onClick={() => changeLanguage("en")} className="Language_button">EN</button>
        <button onClick={() => changeLanguage("ru")} className="Language_button">RU</button>
      </div>
    </div>
  );
}
