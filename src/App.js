import logo from './logo.svg';
import './App.css';

function App() {
let title = 'Martix'

function handleChange(event){
console.log(event.target.value)  
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
        <div>
        <h1>My favourite movies to watch</h1>
        <h2>My favourite movies for today watch {title}</h2>
        <input type="text" onChange={handleChange}/>
        </div>
      </header>
    </div>  
  );
}

export default App;
