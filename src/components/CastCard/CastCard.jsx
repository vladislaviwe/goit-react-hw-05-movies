
const CastCard = ({ items }) => {
  const element = items.map(({ profile_path, character, name, cast_id }) => 
    <li key={cast_id}>
        {profile_path && <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />}
        <p>{name}</p>
        <p>Character: {character}</p>
    </li>)
    return <ul>{element}</ul>
}

export default CastCard;