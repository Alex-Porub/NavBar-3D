import React, { useCallback, useState } from "react";
// css
import styles from "./InputPlus.module.scss";

const InputPlus = ({ onAdd, placeholder }) => {
    const [inputValue, setInputValue] = useState("");
    const addTask = useCallback(() => {
        onAdd(inputValue);
        setInputValue("");
    }, [inputValue]);
    return (
        <form
            className={styles.inputPlus}
            onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }}
            onKeyDown={(e) => {
                e.key == "Enter" && addTask();
            }}
        >
            <input
                type="text"
                className={styles.inputPlusValue}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                placeholder={placeholder}
            />
            <button aria-label="Add" className={styles.inputPlusButton} />
        </form>
    );
};

export default InputPlus;
