import logo from './logo.svg';
import './App.css';
// aby uzywac zmiennej ktora jest reaktywna to stan komponantu dla title 
import {useState} from "react";



function App() {
// let title = 'Martix'
const [title, setTitle] =useState('Wall-E')

  function handleChange(event){
    // title = event.target.value  <-- wronga aproach
    setTitle(event.target.value)
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
        <div>
        <h1>My favourite movies to watch</h1>
        <h2>My favourite movies for today to watch is {title}</h2>
        <input type="text" onChange={handleChange}/>
        </div>
      </header>
    </div>  
  );
}

export default App;


// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILvssa4A0kWatKokkOnAmDvM+lhoAD5c9I+OTjqtFBM2 pet.ra@o2.pl
