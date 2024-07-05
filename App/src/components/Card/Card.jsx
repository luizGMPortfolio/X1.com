/* eslint-disable react/prop-types */
import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ Style, id }) => {
  return (
    <Link
      to={`/Games/${id}`}
      className={`Card ${
        Style === "CommingSoon" ? "Carter-One-Cinza CommingSoon" : ""
      }`}
    >
      {Style === "CommingSoon" && <h2>Comming Soon</h2>}
    </Link>
  );
};

export default Card;
