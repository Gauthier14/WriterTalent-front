import { TfiWrite } from "react-icons/tfi";
import "./WriterButton.scss";
import { Link } from "react-router-dom";

const WriterButton = () => (
  <Link to="/edit">
    <div className="type-writer">
      <span>Rédiger un nouvel écrit</span>
      <TfiWrite />
    </div>
  </Link>
);

export default WriterButton;
