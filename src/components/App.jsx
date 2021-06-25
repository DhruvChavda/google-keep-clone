import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./all-styles.css";

function App() {
    const [list, setList] = useState([]);

    // RUN ONCE TO GET NOTES
    useEffect(() => {
        getLocalNotes();
    }, []);

    // UPDATE EVERY TIME LIST CHANGES
    useEffect(() => {
        saveLocalNotes();
    }, [list]);

    function addNote(note) {
        setList((prev) => {
            if (note.title !== "" || note.content !== "") return [...prev, note];
            else return [...prev];
        });
    }

    function updateNote(noteInd, newNote) {
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

    // save local notes
    const saveLocalNotes = () => {
        if (localStorage.getItem("notes") === null) {
            localStorage.setItem("notes", JSON.stringify([]));
        } else {
            localStorage.setItem("notes", JSON.stringify(list));
        }
    };

    const getLocalNotes = () => {
        if (localStorage.getItem("notes") === null) {
            setList([]);
        } else {
            let oldNotes = JSON.parse(localStorage.getItem("notes"));

            setList(oldNotes);
        }
    };

    return (
        <div className="MainPage">
            <div className='except-footer'>
                <Header />
                <CreateArea adder={addNote} />
                {list.map(createNote)}
            </div>
            <div className='myFooter'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
