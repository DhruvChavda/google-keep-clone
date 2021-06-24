import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [list, setList] = useState([]);

    function addNote(note) {
        setList((prev) => {
            if (note.title !== "" || note.content !== "") return [...prev, note];
            else return [...prev];
        });
    }

    function updateNote(noteInd, newNote) {
        // console.log("aaya aaya ", noteInd, " yaaahooo!!! ", newNote);
        setList((prev) => {
            return prev.map((note, ind) => {
                if (ind === noteInd) return newNote;
                else return note;
            });
        });
    }

    function deleteNote(delNoteInd) {
        setList((prev) => {
            return prev.filter((note, ind) => ind !== delNoteInd);
        });
    }

    function createNote(note, ind) {
        return (
            <Note
                key={ind}
                id={ind}
                title={note.title}
                content={note.content}
                remove={deleteNote}
                update={updateNote}
            />
        );
    }
    return (
        <div>
            <Header />
            <CreateArea adder={addNote} />
            {list.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;
