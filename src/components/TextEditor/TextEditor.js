/* eslint-disable comma-dangle */
import { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.scss";

function TextEditor() {
  // const dispatch = useDispatch();
  // const editorState = useSelector((state) => state.editor.editorState);
  // const onSaveEditorState = () => {
  //  dispatch({
  //    type: "UPDATE_EDITOR_STATE",
  //    payload: editorState,
  //  });
  // };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(convertToRaw(editorState.getCurrentContent()));
  useEffect(() => {
    const autoSave = setInterval(() => {
      console.log("Enregistrement");
    }, 10000);
    return () => {
      clearInterval(autoSave);
    };
  }, []);
  return (
    <main className="editor">
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
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </main>
  );
}

export default TextEditor;
