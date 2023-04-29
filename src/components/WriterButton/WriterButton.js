import { TfiWrite } from "react-icons/tfi";
import "./WriterButton.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToggleMenu } from "../../actions/menu";

const WriterButton = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/edit"
      onClick={() => {
        dispatch(setToggleMenu());
      }}
    >
      <div className="type-writer">
        <TfiWrite />
        <span>Rédiger un nouvel écrit</span>
      </div>
    </Link>
  );
};

export default WriterButton;
