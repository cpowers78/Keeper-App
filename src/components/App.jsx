import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"



function App() {

    const [notes, setNotes] = useState([]);
    
    function addNote(new_note){
        setNotes(prevNotes => {
            return [...prevNotes, new_note];
        })
    }
    return (
        <div>
        <Header />
        <Footer /> 
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem) => {
            return <Note
            title={noteitem.title}
            content={noteitem.content}

            />
        })}
        </div>
    );
}


export default App;

