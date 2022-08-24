import { createSlice } from "@reduxjs/toolkit";
// crs
import imgSrc_cubeInBox from "../images/portfolioScreens/picBox.jpg";
import imgSrc_battleShip from "../images/portfolioScreens/picBattle.jpg";
import imgSrc_formCustom from "../images/portfolioScreens/picForm.jpg";
import imgSrc_toDoList from "../images/portfolioScreens/picToDoList.jpg";
import imgSrc_jokesOfNorris from "../images/portfolioScreens/jokesOfNorris.jpg";

export const myWorksSlice = createSlice({
    name: "myWorks",
    initialState: {
        works: [
            {
                title: "Cube in Box",
                discription:
                    " This funny toy allows you to control the cube in the container using the keyboard arrows. Unfortunately the touch screen is useless here. The cube that can moove, jump and squat. When the cube hits the wall, it shakes the container. You can also stretch the cube holding it`s corner.",
                imgSrc: imgSrc_cubeInBox,
                href: "cubeinbox",
            },

            {
                title: "Battle ship",
                discription:
                    'This app arranges the ships at random order. This is the basis for the well-known game "Battleship". Every time you push a button, the ships will leave their places and take new places in a random place in an arbitrary manner.',
                imgSrc: imgSrc_battleShip,
                href: "battleship",
            },

            {
                title: "Form with custom elements",
                discription:
                    "The highlight of this form is CUSTOM SELECT, which allows you to style it at your discretion. It supports keyboard control.",
                imgSrc: imgSrc_formCustom,
                href: "pagewithformcustom",
            },

            {
                title: "To-do list",
                discription:
                    'This component consists of items you have to do. You can add your own tasks, you can add some fake tasks from the remote source (here the resource "https://jsonplaceholder.typicode.com/" is used), you can mark the tasks you have done, you can filter tasks by "COMPLETED", you can search the tasks that include some phrase. You can edit every task. You can move a task to Trash. Then you can open the Trash and return the tasks you want to the main list. At the start, the list includes some default tasks, that allow you to understand the possibilities of the app.',
                imgSrc: imgSrc_toDoList,
                href: "todolist",
            },
            {
                title: "Jokes of Chuck Norris",
                discription:
                    'This app use the API from https://api.chucknorris.io/ and generates jokes of Chuck Norris :) . You also can save jokes in "Favourites".',
                imgSrc: imgSrc_jokesOfNorris,
                href: "jokesofnorris",
            },
        ],
    },
    reducers: {},
});

export default myWorksSlice.reducer;
