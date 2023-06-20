import React from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="serach-background-image">
        <div className="search-title">{t('welcome')}</div>
        <div className="search-desc">
          {t('milion_of_movies')}
        </div>
        <input
          type="text"
          placeholder={t('search_for_movie')}
          className="search-inp_search"
        />
        <button className="search-btn_search">{t('search')}</button>
      </div>
    </div>
  );
}