import { Link, useLocation } from "react-router-dom";
import { List } from "./MoviesListStyled";

const MoviesList = ({ items }) => {
    const location = useLocation();
    const element = items.map(({ title, id }) =>
        <li key={id}>
            <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
        </li>)
  return <List>{element}</List>;
}

export default MoviesList;
