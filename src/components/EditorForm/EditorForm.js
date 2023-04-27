/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/require-default-props */

import { useSelector, useDispatch } from "react-redux";
import {
  getEditorFieldsValue,
  getEditorSelectedCategories,
} from "../../actions/editor";
import "./EditorForm.scss";

function EditorForm() {
  const dispatch = useDispatch();
  const postTitle = useSelector((state) => state.editor.title);
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);
  const handleChange = (event) => {
    const { options } = event.target;
    const selectedOptions = [];
    if (options) {
      for (let x = 0; x < options.length; x++) {
        if (options[x].selected) {
          selectedOptions.push(options[x].value);
        }
      }
      dispatch(getEditorSelectedCategories(selectedOptions));
    }
  };
  return (
    <div className="editor-form">
      <div className="left-edit-form">
        <div className="title">
          <label htmlFor="title">Titre de l'écrit</label>
          <input
            type="text"
            name="title"
            id="title"
            value={postTitle}
            onChange={(event) => {
              dispatch(getEditorFieldsValue("title", event.target.value));
            }}
          />
        </div>
        <label htmlFor="standard-select">Standard Select</label>
        <div className="select">
          <select id="standard-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
          <span className="focus" />
        </div>
      </div>

      <div className="right-edit-form">
        <label htmlFor="multi-select">Multiple Select</label>
        <div className="select select--multiple">
          <select id="multi-select" multiple>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
          <span className="focus" />
        </div>
      </div>
      {/* <div className="genres">
        <label htmlFor="genres">Genre : </label>
        <select
          name="genres"
          id="genres"
          onChange={(event) => {
            dispatch(getEditorFieldsValue("genre", event.target.value));
          }}
        >
          {genres.map((genre) => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <label htmlFor="genres">Univers : </label>
      </div>
      <div className="categories">
        <select
          multiple
          name="categories"
          id="categories"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
}

export default EditorForm;
