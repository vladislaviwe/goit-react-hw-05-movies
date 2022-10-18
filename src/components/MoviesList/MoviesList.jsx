import { Link, useLocation } from "react-router-dom";
import { List } from "./MoviesListStyled";

import PropTypes from "prop-types";

const MoviesList = ({ items }) => {
    const location = useLocation();
    const element = items.map(({ title, id }) =>
        <li key={id}>
            <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
        </li>)
  return <List>{element}</List>;
}

export default MoviesList;

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }))
  }
