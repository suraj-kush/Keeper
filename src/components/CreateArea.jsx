import React,{useState} from "react";

function CreateArea() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  function handleChange(event){
    const {value, name} = event.target;
    console.log(event.target)
  }
  function handleAdd(){

  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
