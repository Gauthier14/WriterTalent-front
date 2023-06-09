import { TfiWrite } from "react-icons/tfi";
import "./WriterButton.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditorState } from "draft-js";
import { setToggleMenu } from "../../actions/menu";
import {
  setEditPostInState,
  getEditorFieldsValue,
  getEditorSelectedCategories,
  updateEditor,
} from "../../actions/editor";

const WriterButton = () => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/edit"
      onClick={() => {
        dispatch(setToggleMenu());
        dispatch(setEditPostInState({}));
        dispatch(getEditorFieldsValue("title", ""));
        dispatch(getEditorFieldsValue("genre", ""));
        dispatch(getEditorSelectedCategories([]));
        dispatch(updateEditor(EditorState.createEmpty()));
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
