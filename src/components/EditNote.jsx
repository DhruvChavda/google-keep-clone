import React, { useState } from "react";
import "./all-styles.css";

function EditNote(props) {
    const [editedNote, setEditedNote] = useState({
        title: props.title,
        content: props.content,
    });

    function whenChanged(event) {
        const { name, value } = event.target;
        setEditedNote((prev) => {
            return { ...prev, [name]: value };
        });
    }
    return (
        <div>
            <form className='edit-note'>
                <input
                    onChange={whenChanged}
                    name='title'
                    placeholder='Title'
                    value={editedNote.title}
                />
                <textarea
                    onChange={whenChanged}
                    name='content'
                    placeholder='Take a note...'
                    value={editedNote.content}
                    rows='3'
                />
                <button
                    onClick={(event) => {
                        if (editedNote.title === "" && editedNote.content === "") {
                            props.remove(props.id);
                        } else {
                            props.update(props.id, editedNote);
                        }
                        props.bandh(false);
                        event.preventDefault();
                    }}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditNote;
