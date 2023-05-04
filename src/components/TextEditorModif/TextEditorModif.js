/* eslint-disable brace-style */
/* eslint-disable no-shadow */
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertFromRaw } from 'draft-js';
import EditorForm from '../EditorForm/EditorForm';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditorModif.scss';
import {
  setEditPostLoaded,
  updatePost,
  setEditPostInState,
  getEditorSelectedCategories,
  getEditorFieldsValue,
  updateEditor,
  askForPublication,
} from '../../actions/editor';
import Toolbar, { getCategoriesIds } from '../../selectors/editor';
import NewLoader from '../NewLoader/NewLoader';
import { manageSessionStorage } from '../../selectors/user';
import { setMessageInfosInState } from '../../actions/messages';
import { generateMessages, showMessages } from '../../selectors/message';

function TextEditorModif() {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.editor.loaded);
  const editorState = useSelector((state) => state.editor.editorState);
  const postTitle = useSelector((state) => state.editor.title);
  const genreSelected = useSelector((state) => state.editor.genre);
  const categSelected = useSelector((state) => state.editor.categories);
  const { id } = useParams();
  useEffect(() => {
    const token = manageSessionStorage('get', 'token');
    axios
      .get(`http://localhost:8000/api/post/awaiting/${id}`, {
        headers: {
          // nom du header: valeur
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const { content } = response.data;
        const contentState = convertFromRaw(JSON.parse(content));
        dispatch(updateEditor(EditorState.createWithContent(contentState)));
        dispatch(setEditPostInState(response.data));
        dispatch(setEditPostLoaded());
        dispatch(getEditorFieldsValue('title', response.data.title));
        dispatch(getEditorFieldsValue('genre', response.data.genre.id));
        dispatch(getEditorSelectedCategories(getCategoriesIds(response.data.categories)));
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  const onEditorStateChange = (editorState) => {
    dispatch(updateEditor(editorState));
  };
  const handleSubmit = () => {
    if (postTitle !== '' && genreSelected !== '' && categSelected !== []) {
      dispatch(updatePost(id));
    } else {
      dispatch(setMessageInfosInState(generateMessages('login-input-empty')));
      showMessages();
    }
  };
  const handleSubmitToPublish = () => {
    if (postTitle !== '' && genreSelected !== '' && categSelected !== []) {
      dispatch(askForPublication(id));
    } else {
      dispatch(setMessageInfosInState(generateMessages('login-input-empty')));
      showMessages();
    }
  };

  return loaded ? (
    <main className="editor">
      <EditorForm />
      <Editor
        // toolbarOnFocus
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={Toolbar}
      />
      {/* <textarea
          // style={{ display: "none" }}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      <div className="buttons-group">
        <button
          type="button"
          className="editor-button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Sauvegarder
        </button>
        <button
          type="button"
          className="editor-button"
          onClick={() => {
            handleSubmitToPublish();
          }}
        >
          Demande de publication
        </button>
      </div>
    </main>
  ) : (
    <NewLoader />
  );
}

export default TextEditorModif;
