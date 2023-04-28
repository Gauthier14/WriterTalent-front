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
        <label htmlFor="standard-select">Sélectionner le genre :</label>
        <div className="select">
          <select
            id="standard-select"
            name="genres"
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

          <span className="focus" />
        </div>
      </div>

      <div className="right-edit-form">
        <label htmlFor="multi-select">Sélectionner la catégorie :</label>
        <div className="select select--multiple">
          <select
            id="multi-select"
            multiple
            name="categories"
            onChange={handleChange}
            size={8}
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <span className="focus" />
        </div>
      </div>
    </div>
  );
}

export default EditorForm;
