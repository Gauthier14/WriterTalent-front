import { useSelector, useDispatch } from 'react-redux';
import { getEditorFieldsValue, getEditorSelectedCategories } from '../../actions/editor';
import './EditorForm.scss';

function EditorForm() {
  const dispatch = useDispatch();
  const postTitle = useSelector((state) => state.editor.title);
  const genreSelected = useSelector((state) => state.editor.genre);
  const categSelected = useSelector((state) => state.editor.categories);
  const genres = useSelector((state) => state.menu.genres);
  const categories = useSelector((state) => state.menu.categories);

  const handleChange = (event) => {
    const { options } = event.target;
    const selectedOptions = [];
    if (options) {
      for (let x = 0; x < options.length; x + 1) {
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
          <label htmlFor="title">
            Titre de l'écrit
            <input
              type="text"
              name="title"
              id="title"
              value={postTitle}
              onChange={(event) => {
                dispatch(getEditorFieldsValue('title', event.target.value));
              }}
            />
          </label>
        </div>
        <label htmlFor="standard-select">
          Sélectionner le genre :
          <div className="select">
            <select
              id="standard-select"
              name="genres"
              onChange={(event) => {
                dispatch(getEditorFieldsValue('genre', event.target.value));
              }}
            >
              <option>Choisissez un genre</option>
              {genres.map((genre) => (
                <option value={genre.id} key={genre.id} selected={genre.id == genreSelected}>
                  {genre.name}
                </option>
              ))}
            </select>

            <span className="focus" />
          </div>
        </label>
      </div>

      <div className="right-edit-form">
        <label htmlFor="multi-select">
          Sélectionner la catégorie :
          <div className="select select--multiple">
            <select id="multi-select" multiple name="categories" onChange={handleChange} size={8}>
              {categories.map((category) => (
                <option
                  value={category.id}
                  key={category.id}
                  selected={categSelected.includes(category.id)}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <span className="focus" />
          </div>
        </label>
        <span className="span-info">
          Pour selectionner plusieurs catégories, utilisez 'Ctrl + Click'
        </span>
      </div>
    </div>
  );
}

export default EditorForm;
