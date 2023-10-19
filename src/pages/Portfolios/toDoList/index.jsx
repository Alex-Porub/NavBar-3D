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
import { addTasks, createTask, emptyTrash, sortTasks_byDate } from "../../../store/toDoListReducer";
//localisation
import { useTranslation } from "react-i18next";

const ToDoList = () => {
    const mainTasks = useSelector((state) => state.todoList.tasks);
    const trashTasks = useSelector((state) => state.todoList.trashTasks);
    const [tasks, setTasks] = useState(mainTasks);
    const [tasksFiltered, setTasksFiltered] = useState([...tasks]);
    const [filterName, setFilterName] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [isTrashMode, setIsTrashMode] = useState(false);
    const dispatch = useDispatch();
    //localisation
    const { t, i18n } = useTranslation();
    const tns = function () {
        return t(...arguments, { ns: 'toDo' });
    }

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
        const value = prompt(tns("todo.options.prompt-query", "How many tasks do you want to load?:"));
        let number = value ? parseInt(value) : 0;
        while (isNaN(number)) {
            const value = prompt("The value is not a number! How many tasks do you want to load?:");
            number = value ? parseInt(value) : 0;
        }
        while (number > 100 || number < 0) {
            const value = prompt("The value must be in the range 0...100! How many tasks do you want to load?:");
            number = value ? parseInt(value) : 0;
        }
        const path = `https://jsonplaceholder.typicode.com/todos?_limit=${number}`;
        let failureCounter = 0;
        const data = await fetchGET_byURL(path);
        data.forEach((task) => {
            task.id = task.id + "-br_" + Date.now();
            if (tasks.findIndex((item) => item.id === task.id) < 0) {
                dispatch(addTasks({ newTasks: [task] }));
            } else failureCounter++;
        });
        failureCounter &&
            alert(`${failureCounter} adding tasks have an id identical to some id in the current list! So they will not be added.`);
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

    function clearInputSearch(e) {
        setSearchValue("");
    }

    return (
        <div className={`page ${styles.pageToDoList}`}>
            <article className={styles.article}>
                <h1 className={styles.articleTitle}>{tns("todo.h1", "To Do List")}</h1>
                <section className={styles.articleSection_Create}>
                    <div className={styles.otherOptions}>
                        <button
                            className={styles.trashOnButton + (isTrashMode ? ` ${styles.trashMode}` : "")}
                            onClick={() => {
                                setIsTrashMode(!isTrashMode);
                            }}
                            title={isTrashMode ? tns("todo.options.toolt-main", "Main") : tns("todo.options.toolt-trash", "Trash")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                                <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352" />
                                <path
                                    d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                            </svg>
                        </button>
                        {isTrashMode ? (
                            <button
                                className={styles.emptyTrashButton}
                                onClick={() => {
                                    if (trashTasks.length) {
                                        window.confirm(tns("todo.options.confirm-q", "Do you want to delete forever all the tasks from the trash?")) && dispatch(emptyTrash())
                                    } else alert(tns("todo.options.alert-phrase", "There is no any tasks in the trash!"));
                                }}
                                title={tns("todo.options.toolt-emptyTrash", "Empty the trash")}
                            >
                                <span>
                                    {tns("todo.options.emptyTrash", "CLEAN")}
                                </span>

                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                                            stroke="currentColor"
                                            strokeWidth="1.224"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        ) : (
                            <button className={styles.addTasksButton} onClick={addTasksFromRemote}>
                                {tns("todo.options.addFake_p1", "Add fake tasks")} <br /> {tns("todo.options.addFake_p2", "from a remote source")}
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
                            placeholder={tns("todo.options.placeholder", "new Task...")}
                        ></InputPlus>
                    )}

                    <div className={styles.filters}>
                        <select
                            className={styles.filterIsCompleted + (isTrashMode ? ` ${styles.trashMode}` : "")}
                            onChange={(e) => {
                                setFilterName(e.target.value);
                            }}
                        >
                            <option value="all">{tns("todo.options.select.all", "ALL")}</option>
                            <option value="completed">{tns("todo.options.select.completed", "COMPLETED")}</option>
                            <option value="not completed">{tns("todo.options.select.notcompleted", "NOT COMPLETED")}</option>
                        </select>
                        <div className={styles.filters + " " + styles.filterSearch}>
                            <input
                                className={styles.inputSearch + (isTrashMode ? ` ${styles.trashMode}` : "")}
                                placeholder={tns("todo.options.search", "search")}
                                value={searchValue}
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                }}
                            >
                            </input>
                            <button className={styles.buttonClear}
                                onClick={clearInputSearch}
                            >
                            </button>
                        </div>
                    </div>
                </section>

                <section className={styles.articleSection_Tasks + (isTrashMode ? ` ${styles.trashMode}` : "")}>
                    {isTrashMode ? <h2>{tns("todo.h2_trash", "Trash")}</h2> : <h2>{tns("todo.h2_main", "Main")}</h2>}
                    <ul>
                        {tasksFiltered.length === 0 && <p className={styles.articleSectionText}>There is no any tasks</p>}
                        <TransitionGroup component={null}>
                            {tasksFiltered.map((task) => (
                                <CSSTransition key={task.id} timeout={500} classNames="articleSectionTextLi">
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
