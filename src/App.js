import logo from './logo.svg';
import './App.css';
// aby uzywac zmiennej ktora jest reaktywna to stan komponantu dla title 
import {useState} from "react";



function App() {
// let title = 'Martix'
const [title, setTitle] =useState('Wall-E')

let naglowek = '';
if(title.length < 5) {
  naglowek = "Text is too short"
} else if(title.length < 15 ) {
  naglowek = "That is a good title"
} else if (title.length > 45){ 
  naglowek = "This is too long"
  
}


  function handleChange(event){
    // title = event.target.value  <-- wronga aproach
    setTitle(event.target.value)
  }

  // function handleClick(event){
  //   alert(title)
  // }

// cernary operator ? :
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
        <div>
        <h1>My favourite movies to watch</h1>
        <h2>My favourite movies for today to watch is {title}</h2>

        {/* <div>{naglowek}</div> */}
        
        {title.length > 0 && <div>{naglowek}</div>}

        <input type="text" value={title} onChange={handleChange}/>
        <button type="button" onClick={() => alert(title)}> Pokaz tytul filmu </button>

        </div>
      </header>
    </div>  
  );
}

export default App;


