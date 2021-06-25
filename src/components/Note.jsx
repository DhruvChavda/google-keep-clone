import React, { useState } from "react";
import EditNote from "./EditNote";
import "./all-styles.css";

function Note(props) {
    const [noteClass, setnoteClass] = useState("note");
    const [btn, setBtn] = useState("DONE");
    const [updateFlag, setUpdateFlag] = useState(false);

    function toggleClass() {
        if (noteClass === "note") {
            setnoteClass("note done");
            setBtn("UNDONE");
        } else {
            setnoteClass("note");
            setBtn("DONE");
        }
    }

    function toggleFlag() {
        setUpdateFlag((flag) => !flag);
    }

    return (
        <div className={noteClass}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.remove(props.id)}>DELETE</button>
            <button onClick={() => toggleClass()}>{btn}</button>
            <button onClick={() => toggleFlag()}>EDIT</button>
            {updateFlag && <EditNote {...props} bandh={setUpdateFlag} />}
        </div>
    );
}

export default Note;
