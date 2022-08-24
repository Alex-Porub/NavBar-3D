import React, { useEffect } from "react";
// script
import mainScriptforJokes from "./script";
// css
import "./styles.scss";

function JokesOfNorris() {
    
    useEffect(() => {
        mainScriptforJokes();
    }, []);

    return (
        <div className={"page-jokesOfNorris"}>
            <div className="mainContent">
                <div className="leftSide">
                    <div className="mainArea">
                        <h1>Hey!</h1>
                        <h2>Let’s try to find a joke for you:</h2>
                        <p className="input-item">
                            <input id="randomInput" name="wayToSearch" type="radio" defaultValue="random" />
                            <label htmlFor="randomInput">Random</label>
                        </p>
                        <p className="input-item">
                            <input id="fromCategInput" name="wayToSearch" type="radio" defaultValue="from categories" defaultChecked />
                            <label htmlFor="fromCategInput">From categories</label>
                        </p>
                        <div className="categories"></div>
                        <p className="input-item">
                            <input id="searshInput" name="wayToSearch" type="radio" defaultValue="search" />
                            <label htmlFor="searshInput">Search</label>
                        </p>
                        <p className="input-item">
                            <input name="textToSearch" placeholder="Free text search..." />
                        </p>
                        <button className="btn-getJoke" title="Click here to get jokes">
                            Get a joke
                        </button>
                        <div className="allGettedJokesContainer"></div>
                    </div>
                </div>
                <div className="darkWafer"></div>
                <div className="favouriteJokesArea">
                    <h3 className="favouriteJokesArea__title">Favourite</h3>
                    <div className="favouriteJokesContainer"></div>
                </div>
                <div className="favouriteActivation">
                    <button className="favouriteActivation_icon">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                    </button>
                    Favourite
                </div>
            </div>
            <div className="popupDiscription-container">
                <div className="popupDiscription-content">
                    <p>
                        This app uses the API from
                        <strong>
                            <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a>
                        </strong>
                        and generates jokes of Chuck Norris :) . You also can save jokes in "Favourites".
                    </p>
                    <span>Click anywhere to close</span>
                    <button type="button" className="popupDiscription-content__buttonClose"></button>
                </div>
            </div>
        </div>
    );
}

export default JokesOfNorris;
