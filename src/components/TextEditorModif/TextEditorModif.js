/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
// import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import { useDispatch, useSelector } from "react-redux";
import EditorForm from "../EditorForm/EditorForm";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorModif.scss";
import {
  updateEditor,
  getEditPostFromApi,
  updatePost,
} from "../../actions/editor";
import { toolbarParams } from "../../selectors/editor";

function TextEditorModif() {
  const dispatch = useDispatch();
  const postToEdit = useSelector((state) => state.editor.postToEdit);
  const contentState = convertFromRaw(JSON.parse(postToEdit.content));
  const { id } = useParams;
  if (id !== undefined) {
    useEffect(() => {
      dispatch(getEditPostFromApi(id));
    }, []);
  }

  const onEditorStateChange = (contentState) => {
    dispatch(updateEditor(contentState));
  };
  return (
    <main className="editor">
      <EditorForm />
      <Editor
        // toolbarOnFocus
        contentState={contentState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onContentStateChange={onEditorStateChange}
        toolbar={toolbarParams}
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
            dispatch(
              updatePost(
                // draftToHtml(convertToRaw(editorState.getCurrentContent()))
                contentState
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
      </div>
    </main>
  );
}

export default TextEditorModif;
