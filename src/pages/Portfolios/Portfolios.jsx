import React from "react";
import { useSelector } from "react-redux"
// components
import MyWorkLink from "../../components/MyWorkLink/MyWorkLink";
// css
import cl from "./Portfolios.module.scss"

const Portfolios = () => {

    const works = useSelector(state => state.myWorks.works);

    return (
        <div className={"page" + " " + cl.pagePortfolios}>
            <div className={cl.pagePortfolios__content}>
                <h1 className={cl.pagePortfolios__content_headline}>Portfolios</h1>
                <ul className={cl.pagePortfolios__content_workLinksContainer}>
                    {works.map((work) => (
                        <li key={work.href}>
                            <MyWorkLink work={work} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Portfolios;