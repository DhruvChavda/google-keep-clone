import React, { useState } from "react";
import "./all-styles.css";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function whenChanged(event) {
        const { name, value } = event.target;
        // console.log(name + value);
        setNote((prev) => {
            return { ...prev, [name]: value };
        });
    }

    return (
        <div>
            <form>
                <input onChange={whenChanged} name='title' placeholder='Title' value={note.title} />
                <textarea
                    onChange={whenChanged}
                    name='content'
                    placeholder='Take a note...'
                    rows='3'
                    value={note.content}
                />
                <button
                    onClick={(event) => {
                        props.adder(note);
                        setNote({ title: "", content: "" });
                        event.preventDefault();
                    }}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
