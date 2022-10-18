import PropTypes from "prop-types";

const ReviewCard = ({ items }) => {
    const element = items.map(({ author, content, id }) => 
      <li key={id}>
          <b>Author: {author}</b>
          <p>{content}</p>
      </li>)
      return <ul>{element}</ul>
  }
  
  export default ReviewCard;

  ReviewCard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
  }
