import React from "react";
import cl from "./MyHeader.module.scss";
// import gifHref from "../../../images/gif/ukrainian-waving-flag-34.gif";
import { Link } from "react-router-dom";
// localisation
import { useTranslation } from 'react-i18next';
// components
import MyLanguageSwitcher from "../MyLanguageSwitcher/MyLanguageSwitcher";

const MyHeader = ({ isNavBarActiv, setIsNavBarActiv }) => {
    const { t } = useTranslation();
    return (
        <header className={cl.header + " plusPuddingForPopup"}>
            <button
                className={cl.header__menuButton + (isNavBarActiv ? ` ${cl.menuOff}` : "")}
                onClick={() => setIsNavBarActiv(!isNavBarActiv)}
                title={isNavBarActiv ? "menu OFF" : "menu ON"}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Link to={"/contacts"} className={cl.header__title} title="contact me">
                <span className={cl.header__title_tallLetter}>{t('main.header.author.firstName.first')}</span>
                {t('main.header.author.firstName.others')} <span className={cl.header__title_tallLetter}>{t('main.header.author.lastName.first')}</span>
                {t('main.header.author.lastName.others')}
            </Link>
            <MyLanguageSwitcher />
            {/* <div className={cl.header__flag}>
                <img src={gifHref} title="we are from Ukraine" alt="flag"/>
            </div> */}
        </header>
    );
};

export default MyHeader;
