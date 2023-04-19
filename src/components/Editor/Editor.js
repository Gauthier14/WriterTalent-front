import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { updateEditorState } from "../../actions/editor";

function Editor() {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor.editorState);
  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        data={editorState}
        onChange={(event, editor) => {
          const data = editor.getData();
          dispatch(updateEditorState(data));
        }}
      />
    </div>
    /* <div>
        <h2>Content</h2>
        <p>{parse(editorState)}</p>
      </div> */
  );
}

export default Editor;
