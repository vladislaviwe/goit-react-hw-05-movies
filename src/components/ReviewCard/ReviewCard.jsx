
const ReviewCard = ({ items }) => {
    const element = items.map(({ author, content, id }) => 
      <li key={id}>
          <b>Author: {author}</b>
          <p>{content}</p>
      </li>)
      return <ul>{element}</ul>
  }
  
  export default ReviewCard;
