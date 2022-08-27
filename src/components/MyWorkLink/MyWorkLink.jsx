import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import cl from "./MyWorkLink.module.scss";

const MyWorkLink = ({ work }) => {

    
    const [observerRef, inView] = useInView({
        threshold: 0.6,
    });

    return (
        <div ref={observerRef} className={cl.wrapper + (inView ? ` ${cl.goodVisible}` : "")}>
            <div className={cl.workLink}>
                <div className={cl.workLink__image}>
                    <img className={cl.workLink__image_image} src={work.imgSrc} />
                </div>
                <div className={cl.workLink__discription}>
                    <h4 className={cl.discription__title}>{work.title}</h4>
                    <p className={cl.discription__text}>{work.discription}</p>
                </div>
            </div>
            <Link to={work.href} className={cl.workLink__link}>
                GO
            </Link>
        </div>
    );
};

export default MyWorkLink;
