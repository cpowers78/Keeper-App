import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"



function App() {
    const [noteItems, setnoteItems] = useState([]);

    function addNote(inputText){
        setnoteItems((prevnoteItems) => {
            return [...noteItems, inputText];
        });
    }

    function deleteNote(id){
        setnoteItems(prevnoteItems => {
            return prevnoteItems.filter(
                (note, index) => {
                    return index != id;
                }
            );
        });
    }
  
    return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {noteItems.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onPress={deleteNote}
          />
        );
      })}
        <Footer />
    </div>
  );
}

export default App;

