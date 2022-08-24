import React from "react";
import { useSelector } from "react-redux"
// conponennts
import MyWorkCard from "../../components/MyWorkCard/MyWorkCard";
// css
import cl from "./Home.module.scss";

const Home = () => {

    const works = useSelector(state => state.myWorks.works);

    return (
        <div className={`page ${cl.pageHome}`}>
            <div className={cl.pageHome__content}>
                <h1 className={cl.headline}>
                    The site for presenting my portfolios and contacts
                </h1>
                
                    <p className={cl.text}>
                        This site as a whole is worth looking at as a single large portfolio. But it also contains micro portfolios in the
                        appropriate section. On the "Contacts" page you will find many ways to contact me.
                    </p>
               
                <article className={cl.article}>
                    <h2>
                        You can see my works there. <br /> You can also find him in the appropriate section of the app.
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
