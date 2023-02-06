import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
    image: null
  });

  function handleChange(event){
    const {name, value} = event.target;
    setInputText(prevInputText => {
      return{
        ...prevInputText,
        [name]: value
      };
    });
  }

  function handleFileChange(event) {
    
    setInputText(prevInputText => {
      return {
        ...prevInputText,
        image: event.target.files[0]
      };
    });
    
  }

  function submitNote(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: "",
      image: null
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" onChange={handleChange} value={inputText.title} placeholder="Title" /> : null}
        <textarea onClick={expand} name="content" onChange={handleChange} value={inputText.content} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
        {isExpanded ? 
        <div className="container-class">Upload Image (Optional):
        {/* <button className="file-button"> */}
            <input  accept="image/*" type="file" onChange={handleFileChange} id="myfile" name="myfile"/>
        
        </div>
          : null}

        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}><AddCircleOutlineIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}


export default CreateArea;


