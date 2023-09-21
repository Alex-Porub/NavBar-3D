import React from "react";
import { useSelector } from "react-redux"
// conponennts
import MyWorkCard from "../../components/MyWorkCard/MyWorkCard";
// css
import cl from "./Home.module.scss";
//localisation
import { useTranslation } from "react-i18next";

const Home = () => {

    const works = useSelector(state => state.myWorks.works);
    
    //the function for chosing the text for current language
    const { t, i18n } = useTranslation();

    return (
        <div className={`page ${cl.pageHome}`}>
            <div className={cl.pageHome__content}>
                <h1 className={cl.headline}>
                    {t("main.pages.home.h1")}
                </h1>
                
                    <p className={cl.text}>
                    {t("main.pages.home.discription")}
                    </p>
               
                <article className={cl.article}>
                    <h2>
                    {t("main.pages.home.myWorks.1")}<br />{t("main.pages.home.myWorks.2")}
                        
                    </h2>
                    <ul className={cl.portfCardsWrap}>
                        {works.map((work) => (
                            <li key={work.href}>
                                <MyWorkCard work={work} />
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default Home;
