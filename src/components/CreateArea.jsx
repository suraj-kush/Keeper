import React,{useState} from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {value, name} = event.target;
    setInput(preInput => {
      return {
        ...preInput,
        [name]: value
      }
    })
  }
  function handleAdd(event){
      event.preventDefault()
      props.addItem(input)
      setInput(preInput =>{
        return {
          title: "",
          content: ""
        }
      })
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={input.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
