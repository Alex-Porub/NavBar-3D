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
                    "This funny toy allows you to move the cube in the container using keyboard arrows. Unfortunately, the touch screen is useless here. The cube that can move, jump and squat. When the cube hits the wall, it shakes the container. You can also stretch the container where the cube moves.  For this, you need to click on the bottom right corner and hold it while you change the size. See the pop-up tips. 😉",
                imgSrc: imgSrc_cubeInBox,
                href: "cubeinbox",
            },

            {
                title: "Battle ship",
                discription:
                    'This app arranges the ships in random order. This is the basis for the well-known game "Battleship" originally designed to be played with paper and a pencil. Every time you push a button, the ships will leave their places and take new places in an arbitrary manner. Of course, the ships do not touch each other. It’s just a computer setting up ships according to the rules in one of many possible combinations. However, in order to complete the real game, you will also need a second field where the player will place their own ships.',
                imgSrc: imgSrc_battleShip,
                href: "battleship",
            },

            {
                title: "Form with custom elements",
                discription:
                    "The highlight of this form is styled custom elements. Especially want to focus on CUSTOM SELECT, which allows you to style it at your discretion. All the elements support keyboard control. CUSTOM SELECT has tips on how to control using the keyboard. With animation, placeholders in the input elements turn into labels when it is relevant. You can attach the image to the form and immediately see it in the corresponding element.",
                imgSrc: imgSrc_formCustom,
                href: "pagewithformcustom",
            },

            {
                title: "To-do list",
                discription:
                    'This component consists of items you have to do. You can add your own tasks, you can add some fake tasks from the remote source (jsonplaceholder.typicode.com), you can mark the tasks you have done, you can filter tasks by "COMPLETED", and search the tasks that include some phrase. You can edit every task. You can move a task to Trash. Then you can open the Trash and return the tasks you want to the main list. At the start, the list includes some default tasks, that allow you to understand the possibilities of the app.',
                imgSrc: imgSrc_toDoList,
                href: "todolist",
            },
            {
                title: "Jokes of Chuck Norris",
                discription:
                    'This app uses the API from https://api.chucknorris.io/ and generates (downloads) Chuck Norris`s jokes 😉. You have the possibility to choose one of three options: download a random joke; download a joke from one of the categories you selected; or download jokes, that include the phrase you wrote. You also can save jokes in "Favourites" by clicking on the heart icon. The action has an interesting animation. All the favorite jokes are saved in the browser and you will see them in the next session.',
                imgSrc: imgSrc_jokesOfNorris,
                href: "jokesofnorris",
            },
        ],
    },
    reducers: {},
});

export default myWorksSlice.reducer;
