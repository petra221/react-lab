export default function MovieList(props){
return (
<div>
    <h2>movie List</h2>
    {/* <h3>({props.movies.length})</h3> */}
    <h2>
            <ul>
                {
                props.movies.map(movie => 
                    <li key={movie.title}>
                    {movie.title} ({movie.year})
                    </li>)
                }
            </ul>
        </h2>
</div>)

}