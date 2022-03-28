import "./SingleCocktail.css";
import { Link } from "react-router-dom";

function SingleCocktail(props) {
  return (
    <Link to={`/cocktails/${props.sleutel}`}>
      <div className="imgBox">
        <div className="image">
          <img src={props.image} alt="Broken" />
          <div key={props.sleutel} className="text">
            {props.strDrink}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleCocktail;
