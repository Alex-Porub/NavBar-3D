import React from "react";
import cl from "./MyHeader.module.scss";
import gifHref from "../../../images/gif/ukrainian-waving-flag-34.gif";
import { Link } from "react-router-dom";

const MyHeader = ({ isNavBarActiv, setIsNavBarActiv }) => {
    return (
        <header className={cl.header + " " + "plusPuddingForPopup"}>
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
                <span className={cl.header__title_tallLetter}>O</span>
                leksandr <span className={cl.header__title_tallLetter}>P</span>
                orubinovskyi
            </Link>

            <div className={cl.header__flag}>
                <img src={gifHref} title="we are from Ukraine" />
            </div>
        </header>
    );
};

export default MyHeader;
