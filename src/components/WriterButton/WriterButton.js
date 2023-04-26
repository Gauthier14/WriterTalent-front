import { TfiWrite } from "react-icons/tfi";
import "./WriterButton.scss";
import { Link } from "react-router-dom";

const WriterButton = () => (
  <Link to="/edit">
    <div className="type-writer">
      <TfiWrite />
      <span>Rédiger un nouvel écrit</span>
    </div>
  </Link>
);

export default WriterButton;
