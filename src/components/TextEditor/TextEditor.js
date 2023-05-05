import { Editor } from 'react-draft-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import EditorForm from '../EditorForm/EditorForm';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DOMPurify from 'dompurify';
import './TextEditor.scss';
import { saveNewPost, updateEditor } from '../../actions/editor';
import Toolbar from '../../selectors/editor';
import { setMessageInfosInState } from '../../actions/messages';
import { generateMessages, showMessages } from '../../selectors/message';

function TextEditor() {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor.editorState);
  const postTitle = useSelector((state) => state.editor.title);
  const genreSelected = useSelector((state) => state.editor.genre);
  const categSelected = useSelector((state) => state.editor.categories);
  const onEditorStateChange = (editorState) => {
    dispatch(updateEditor(editorState));
  };
  const handleSubmit = () => {
    if (postTitle !== '' && genreSelected !== '' && categSelected.length > 0) {
      dispatch(saveNewPost());
    } else {
      dispatch(setMessageInfosInState(generateMessages('login-input-empty')));
      showMessages();
    }
  };

  const sanitizedContent = DOMPurify.sanitize(editorState.getCurrentContent().getPlainText());

  return (
    <main className="editor">
      <EditorForm />
      <Editor
        // To secure the Editor component with DOMPurify, you can use its sanitize function to sanitize any HTML content before rendering it.
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={Toolbar}
        contentState={sanitizedContent}
      />
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
      </div>
    </main>
  );
}

export default TextEditor;
