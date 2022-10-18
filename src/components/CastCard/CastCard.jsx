import PropTypes from "prop-types";

import { CastList, CastItem } from "./CastCardStyled";

const CastCard = ({ items }) => {
  const element = items.map(({ profile_path, character, name, cast_id }) => 
    <CastItem key={cast_id}>
        {profile_path ? <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} /> : <img src="http://dummyimage.com/200x300/c0c0c0" alt="placeholder" />}
        <b>{name}</b>
        <p>Character: {character}</p>
    </CastItem>)
    return <CastList>{element}</CastList>
}

export default CastCard;

CastCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    profile_path: PropTypes.string,
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cast_id: PropTypes.number.isRequired,
  }))
}