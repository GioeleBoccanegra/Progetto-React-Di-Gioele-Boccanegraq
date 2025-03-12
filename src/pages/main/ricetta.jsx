
import { Link } from 'react-router-dom';
export const Ricetta = ({ ricetta }) => {

  return (
    <div className="ricetta-container">
      <h2>{ricetta.title}</h2>
      <img src={ricetta.image} alt={ricetta.title} />
      <Link to={{ pathname: "/ricetta" }} state={{ ricetta }}>
        Prepare it
      </Link>
    </div>
  )
}