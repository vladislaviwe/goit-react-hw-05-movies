import { Link } from "react-router-dom";
import { List } from "./MoviesListStyled";

const MoviesList = ({ items }) => {
    const element = items.map(({ title, id }) =>
        <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li>)
  return <List>{element}</List>;
}

export default MoviesList;
