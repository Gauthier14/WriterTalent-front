/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useDispatch, useSelector } from "react-redux";
import EditorForm from "../EditorForm/EditorForm";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.scss";
import { savePost } from "../../actions/editor";
import Message from "../Message/Message";

function TextEditor() {
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const textMessage = useSelector((state) => state.messages.text);
  const className = useSelector((state) => state.messages.class);
  const serverMessage = useSelector((state) => state.messages.serverMessage);

  /* useEffect(() => {
    const autoSave = setInterval(() => {
      console.log("Enregistrement");
    }, 10000);
    return () => {
      clearInterval(autoSave);
    };
  }, []); */
  return (
    <main className="editor">
      <Message
        text={textMessage}
        otherClass={className}
        serverMessage={serverMessage}
      />
      <EditorForm />
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
      <textarea
        style={{ display: "none" }}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      <div className="buttons-group">
        <button
          type="button"
          className="editor-button"
          onClick={() => {
            dispatch(
              savePost(
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
              )
            );
          }}
        >
          Sauvegarder
        </button>
        <button
          type="button"
          className="editor-button"
          onClick={() => {
            dispatch();
          }}
        >
          Demande de publication
        </button>
        <button
          type="button"
          className="editor-button"
          onClick={() => {
            dispatch();
          }}
        >
          Supprimer
        </button>
      </div>
    </main>
  );
}

export default TextEditor;
