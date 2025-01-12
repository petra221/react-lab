import logo from './logo.svg';
import './App.css';
// aby uzywac zmiennej ktora jest reaktywna to stan komponantu dla title 
import {useState} from "react";



function App() {
// let title = 'Martix'
const [title, setTitle] = useState('')
const [title, setYear] = useState('')
const [movies, setMovies] = useState('')
// const movies = [

//   {title: "Wall-E"},
//   {title: "Pulp Fiction"},
//   {title: "Matrix"},
//   {title: "1670"},
//   {title: "Batman and shopping list"},
// ];

const [movies, setMovies] = useState([]);

function handleAddMovie(event){
  // const newMovie = {title: title, year: year};
  // const newMovie = {title, year}
  // setMovies([...movies, newMovie])
  setMovies([...movies, {title, year}])
}

// setMovies([...movies, newMovie])
// function newMovie(){
// }

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

// ternary operator ? :
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

<h2>Title</h2>
  <ul>
    {/* {movies.map(movie)} => <li key={movie.title} */}
    
{/* this is out */}


  </ul>



      <h2>My Favs to Watch</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
      </ul>

      {/* <h2>Add Movie</h2>
      <input type="text" value={title} onChange={handleChange}/> */}

        <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movies for today to watch is {title}</h2>

          {/* <div>{naglowek}</div> // ternary operator ? : */}
          <div>
          {title.length > 0 && <div>{naglowek}</div>}
          </div>
          <label>title</label>
          <input type="text" value={title} onChange={handleChange} />
          <label>YEar</label>
          <input type="text" value={year} onVolumeChange={(event)=> ReadableStreamBYOBReader(event.target.value)} />
          {/* <button type="button" onClick={() => alert(title)}> Pokaz tytul filmu </button> */}
          <button type="button" onClick={() => setMovies([].push.apply.movies, {title, year})}>Dodaj film</button>
        </div>
      </header>
    </div>  
  );
}

export default App;

