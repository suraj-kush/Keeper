import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [items, setItem] = useState([])
    return <div>
        <Header className="header" />
        <CreateArea />
        <Footer />
    </div>
}

export default App