import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MovieList from "./MoviesList"
function App() {

    const [movies, setMovies] = useState([]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <MovieList movies={movies}/>
            {/* <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/> */}
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
            
            {/* <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel="Add a movie"/>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} buttonLabel="Search for a movie"/>
             */}


        </div>
    );
}

export default App;

