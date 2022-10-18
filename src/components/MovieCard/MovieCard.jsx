import PropTypes from "prop-types";

import { MovieCardContainer } from "./MovieCardStyled";

export default function MovieCard({ item }) {
    const { poster_path, title, vote_average, overview, genres, release_date } = item;
    const poster = `https://image.tmdb.org/t/p/w200/${poster_path}`;
    const movieGenres = genres.map(item => item.name).join(", ");
    const userScore = Math.round(vote_average * 10);
    const releaseDate = release_date.slice(0, 4);

  return (
    <MovieCardContainer>
        {poster_path && <img src={poster} alt={title} />}
        <div>
            {title && <h1>{title}({releaseDate})</h1>}
            {userScore > 0 ? <h2>User Score: {userScore}%</h2> : <p>There are no ratings yet</p>}
            <h2>Overview:</h2>
            {overview && <p>{overview}</p>}
            {movieGenres && <h3>{movieGenres}</h3>}
        </div>
    </MovieCardContainer>
  )
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array,
    release_date: PropTypes.string.isRequired
  })
}