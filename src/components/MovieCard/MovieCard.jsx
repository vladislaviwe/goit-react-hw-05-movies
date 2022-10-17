export default function MovieCard({ item }) {
    const { poster_path, title, vote_average, overview, genres, release_date } = item;
    const poster = `https://image.tmdb.org/t/p/w200/${poster_path}`;
    const movieGenres = genres.map(item => item.name).join(", ");
    const userScore = Math.round(vote_average * 10);
    const releaseDate = release_date.slice(0, 4);

  return (
    <div>
        {poster_path && <img src={poster} alt={title} />}
        <div>
            {title && <h1>{title}({releaseDate})</h1>}
            {userScore &&<h2>User Score: {userScore}%</h2>}
            <h2>Overview:</h2>
            {overview && <p>{overview}</p>}
            {movieGenres && <h3>{movieGenres}</h3>}
        </div>
    </div>
  )
}
