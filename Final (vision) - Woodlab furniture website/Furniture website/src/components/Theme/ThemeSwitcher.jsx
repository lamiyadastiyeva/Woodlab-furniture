import React, { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import "../../assets/sass/Theme/Theme.css"

function ThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {

        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("dark");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("light-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return (
        <div className="mode">
            <div className="mode-btn">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="chk"
                    onClick={() =>
                        setMode((mode) => (mode === "light" ? "dark" : "light"))
                    }
                />
                <label className="label" htmlFor="chk"
                    style={{ background: mode === "dark" ? "#e6cbab" : "#ffeccc" }}>
                    <IoMoonSharp style={{ color: mode === "dark" ? "grey" : "grey"}} />
                    <IoSunny style={{ color: mode === "dark" ? "orange" : 'orange' }} />

                    <div className="ball"
                        style={{ background: mode === "dark" ? '#333' : "#333" }}
                    ></div>
                </label>
            </div>
        </div>


    );
}

export default ThemeSwitcher;