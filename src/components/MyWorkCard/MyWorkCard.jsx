import React from "react";
import cl from "./MyWorkCard.module.scss";
import { Link } from "react-router-dom";

function MyWorkCard({ work }) {
    const resizerFull = function (e) {
        const currWrap = e.target.closest(`.${cl.wrap}`);
        const brothers = currWrap.closest("ul").children;
        for (let el of brothers) {
            let wrap = el.children[0];
            if (wrap && wrap !== currWrap) {
                wrap.classList.remove(`${cl.fullsize}`);
            }
        }
        currWrap.classList.toggle(`${cl.fullsize}`);
    };

    return (
        <div 
            className={cl.wrap}
            onClick={resizerFull}
        >
            <h3>{work.title}</h3>
            <div className={cl.card}>
                <div className={cl.card__imgBox}>
                    <img src={work.imgSrc} />
                </div>
                <div className={cl.card__content}>
                    <p>{work.discription}</p>
                </div>
                <Link
                    to={"/portfolios/" + work.href}
                    className={cl.card__button}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    GO
                </Link>
            </div>
        </div>
    );
}

export default MyWorkCard;
