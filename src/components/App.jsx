import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [items, setItem] = useState([])

    function addItem(input){
        setItem(preItems => {
            return [...preItems, input]
        })
    }
    function deleteItem(index){
        console.log(index)
        setItem(preItems => {
            return preItems.filter((item, id) =>{
                if(id!==index)
                return item
            })
        })
    }
    return <div>
        <Header className="header" />
        <CreateArea addItem={addItem} />
        {
            items.map((item, id) => {
                return <Note item={item} deleteItem={deleteItem} key={id} id={id} />
            })
        }
        <Footer />
    </div>
}

export default App