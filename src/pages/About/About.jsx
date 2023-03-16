import React from "react";
// css
import cl from "./About.module.scss";
// href
import downloadHref from "../../downloads/CV-Front-End-Porub.pdf";
import myFotoHref from "../../images/fotos/foto-self1.jpg";
import iconHTML5 from "../../images/icons/html-5.png";
import iconCSS from "../../images/icons/css-3.png";
import iconJS from "../../images/icons/js.png";
import iconSASS from "../../images/icons/sass.png";
import iconREACT from "../../images/icons/atom.png";
import iconVUE from "../../images/icons/vue.png";

const About = () => {
    return (
        <div className={`page ${cl.pageAbout}`}>
            <div className={cl.pageAbout__content}>
                <div className={cl.pageAbout__header}>
                    <h1 className={cl.pageAbout__header_headline}>About me</h1>
                    <div className={cl.pageAbout__header_foto}>
                        <img src={myFotoHref} alt="selfFoto" />
                    </div>
                </div>
                <p className={cl.text}>
                    Hello! I am a junior front-end developer. I already have many skills, but of course there are more that I can`t do yet.
                    But that’s why I love this profession, because It has a limitless field for growth and improvement. And I also like it
                    because there’s a space for creativity.
                </p>
                <article className={cl.article}>
                    <h2>How I came to IT</h2>
                    <p>
                        I was fond of programming since my studying at school. And I had successes in this field. But, at that moment, the
                        IT- industry wasn`t developed enough in Ukraine, so only true enthusiasts had the courage to be seriously engaged in
                        programming. That’s why I worked in another field for a long time.
                    </p>
                    <p>
                        After a few years, I realized that my understatement was not very appropriate for me, and I didn`t have the
                        opportunity to realize my full potential. And it came the idea to do something that fascinated me once indeed.
                        Moreover, now there is a steady demand for these skills. Friends said: «Do what you like - and succeed!»
                    </p>
                    <p>
                        It took me a long time, but eventually, I found the opportunity and the courage to change my profession. Contrary to
                        my fears that «I won't be able» I graduated from IT courses with distinction (the 1st place in the course!). I did
                        not quit my previous job but continued to improve my skills in Front-End. Such it was in my childhood I like
                        programming. At the moment, I finally decided to change activities and engage in Front-End development. I`m ready
                        for further training and development.
                    </p>
                </article>
                <article className={cl.article}>
                    <h2>Professional details</h2>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Professional skills</h3>
                        <p>
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconHTML5 + ")" }}>html5</span>&emsp;
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconCSS + ")" }}>CSS</span>&emsp;
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconSASS + ")" }}>SASS</span>&emsp;
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconJS + ")" }}>&nbsp;JavaScript&nbsp;ES6</span>&emsp;
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconREACT + ")" }}>React.js</span>&emsp;
                            <span className={cl.skills_item} style={{ "--bgImage": "url(" + iconVUE + ")" }}>Vue.js</span><br />
                            Gulp &emsp; JQuery &emsp; Git &emsp; Adobe Photoshop &emsp; Figma<br />
                            Responsive, adaptive layout, REST API<br />
                            {"{"}Node.js,  TypeScript, Express, MongoDB{"}"} - basic knowledges
                        </p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Languages</h3>
                        <p>Ukrainian: Fluent, &nbsp; &nbsp; Russian: Fluent, &nbsp; &nbsp; English: Intermediate level</p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Education</h3>
                        <p>
                            2001 - Kyiv National University of Technologies and Design Master’s Degree in Electromechanics —&nbsp;
                            <span className={cl.highlightedRed}>graduated with distinction</span> <br />
                            2007 - State Higher Educational Institution Kyiv National Economic University named after Vadym Hetman —
                            Specialist’s Degree in Finance
                        </p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Additional Education</h3>
                        <p>
                            2020 - Hillel IT School, course Front-End Pro —&nbsp;
                            <span className={cl.highlightedRed}>graduated with distinction</span>
                        </p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Last job (not IT industry)</h3>
                        <p>
                            Company: “ENKO” Ltd - commercial firm selling equipment for energy distribution companies of Ukraine. <br />
                            Responsibilities: searching for necessary products, selling equipment, execution of contracts, preparation of
                            tender documentation, accounting documents, logistics.
                        </p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Experience</h3>
                        <p>
                            I have 2.5 years of experience in writing code and HTML layout. I constantly study new materials and don`t stop
                            improving my existing skills. I have impressive experience in my previous job, where I have acquired the skills
                            of teamwork, communication with clients, paperwork, and many others.
                        </p>
                    </div>

                    <div className={cl.article__skills}>
                        <h3 className={cl.article__skills_skillsHeadline}>Additional information</h3>
                        <p>
                            I have a high ability to study, as evidenced by the achievements listed above. I want to create interesting
                            things and to be a part of a good team. These qualities will make a significant contribution to the success and
                            development of your company. I will make every effort to make this happen.
                        </p>
                    </div>
                    <a className={cl.article__downloadCV} href={downloadHref} download>
                        Download CV
                    </a>
                </article>
            </div>
        </div>
    );
};

export default About;
