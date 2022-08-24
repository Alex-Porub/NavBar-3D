import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
// components
import InputPlus from "./components/InputPlus/InputPlus";
import InputTask from "./components/InputTask/InputTask";
// css
import styles from "./index.module.scss";
import "./otherstyles.scss";
// data store actions
import { addTasks, createTask, sortTasks_byDate } from "../../../store/toDoListReducer";

const ToDoList = () => {
    const mainTasks = useSelector((state) => state.todoList.tasks);
    const trashTasks = useSelector((state) => state.todoList.trashTasks);
    const [tasks, setTasks] = useState(mainTasks);
    const [tasksFiltered, setTasksFiltered] = useState([...tasks]);
    const [filterName, setFilterName] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [isTrashMode, setIsTrashMode] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        isTrashMode ? setTasks(trashTasks) : setTasks(mainTasks);
    }, [isTrashMode, mainTasks, trashTasks]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(sortTasks_byDate());
        }, 500);
    }, [tasks]);

    useEffect(() => {
        localStorage.toDoTasks = JSON.stringify(mainTasks);
    }, [mainTasks]);

    useEffect(() => {
        localStorage.toDoTrashTasks = JSON.stringify(trashTasks);
    }, [trashTasks]);

    useEffect(() => {
        filter_isCompleted();
    }, [tasks, filterName, searchValue]);

    async function fetchGET_byURL(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            } else alert("Tasks` request failed! :(");
        } catch (error) {
            console.log(error);
        }
    }

    async function addTasksFromRemote() {
        const value = prompt("How many tasks do you want to load?:");
        let number = value ? parseInt(value) : 0;
        while (isNaN(number)) {
            const value = prompt("The value is not a number! How many tasks do you want to load?:");
            number = value ? parseInt(value) : 0;
        }
        while (number > 100 || number < 0) {
            const value = prompt("The value must be in the range 0...100! How many tasks do you want to load?:");
            number = value ? parseInt(value) : 0;
        }
        const path = `http://jsonplaceholder.typicode.com/todos?_limit=${number}`;
        let failureСounter = 0;
        const data = await fetchGET_byURL(path);
        data.forEach((task) => {
            task.id = task.id + "-br_" + Date.now();
            if (tasks.findIndex((item) => item.id === task.id) < 0) {
                dispatch(addTasks({ newTasks: [task] }));
            } else failureСounter++;
        });
        failureСounter &&
            alert(`${failureСounter} adding tasks have an id identical to some id in the current list! So they will not be added.`);
    }

    function filter_isCompleted() {
        let tasks_isCompleted;
        if (filterName === "completed") {
            tasks_isCompleted = tasks.filter((task) => task.completed);
        } else if (filterName === "not completed") {
            tasks_isCompleted = tasks.filter((task) => !task.completed);
        } else tasks_isCompleted = tasks;

        searchValue
            ? setTasksFiltered(tasks_isCompleted.filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase())))
            : setTasksFiltered(tasks_isCompleted);
    }

    return (
        <div className={`page ${styles.pageToDoList}`}>
            <article className={styles.article}>
                <h1 className={styles.articleTitle}>To Do List</h1>
                <section className={styles.articleSection_Create}>
                    <div className={styles.otherOptions}>
                        <button
                            className={styles.trashOnButton + (isTrashMode ? ` ${styles.trashMode}` : "")}
                            onClick={() => {
                                setIsTrashMode(!isTrashMode);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                        </button>
                        {!isTrashMode && (
                            <button className={styles.addTasksButton} onClick={addTasksFromRemote}>
                                Add fake tasks <br /> from a remote source
                            </button>
                        )}
                    </div>
                    {!isTrashMode && (
                        <InputPlus
                            onAdd={(title) => {
                                if (title) {
                                    dispatch(createTask(title));
                                }
                            }}
                            placeholder="new Task..."
                        ></InputPlus>
                    )}

                    <div className={styles.filters}>
                        <select
                            className={styles.filterIsCompleted + (isTrashMode ? ` ${styles.trashMode}` : "")}
                            onChange={(e) => {
                                setFilterName(e.target.value);
                            }}
                        >
                            <option value="all">ALL</option>
                            <option value="completed">COMPLETED</option>
                            <option value="not completed">NOT COMPLETED</option>
                        </select>
                        <input
                            className={styles.inputSearch + (isTrashMode ? ` ${styles.trashMode}` : "")}
                            placeholder="search"
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>
                </section>

                <section className={styles.articleSection_Tasks + (isTrashMode ? ` ${styles.trashMode}` : "")}>
                    {isTrashMode ? <h2>Trash</h2> : <h2>Main</h2>}
                    <ul>
                        {tasksFiltered.length == 0 && <p className={styles.articleSectionText}>There is no any tasks</p>}
                        <TransitionGroup component={null}>
                            {tasksFiltered.map((task) => (
                                <CSSTransition key={task.id} timeout={700} classNames="articleSectionTextLi">
                                    <li className="articleSectionTextLi">
                                        <InputTask
                                            id={task.id}
                                            title={task.title}
                                            createdAt={task.createdAt}
                                            isChecked={task.completed}
                                            isTrashMode={isTrashMode}
                                        />
                                    </li>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ul>
                </section>
            </article>
        </div>
    );
};

export default ToDoList;
