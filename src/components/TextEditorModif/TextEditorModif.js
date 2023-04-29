/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
// import { useState } from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertFromRaw } from "draft-js";
import EditorForm from "../EditorForm/EditorForm";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorModif.scss";
import {
  setEditPostLoaded,
  updatePost,
  setEditPostInState,
  getEditorSelectedCategories,
  getEditorFieldsValue,
} from "../../actions/editor";
import { getCategoriesIds, toolbarParams } from "../../selectors/editor";
import Loader from "../Loader/Loader";
import { setMessageInfosInState } from "../../actions/messages";
import { showMessages } from "../../selectors/message";

function TextEditorModif() {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.editor.loaded);
  const postToEdit = useSelector((state) => state.editor.postToEdit);
  const { id } = useParams();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    axios
      .get(`http://kyllian-g-server.eddi.cloud:8443/api/post/${id}`)
      .then((response) => {
        dispatch(setEditPostInState(response.data));
        dispatch(setEditPostLoaded());
        const { content } = response.data;
        const contentState = convertFromRaw(JSON.parse(content));
        setEditorState(EditorState.createWithContent(contentState));
        dispatch(getEditorFieldsValue("title", response.data.title));
        dispatch(getEditorFieldsValue("genre", response.data.genre.id));
        dispatch(
          getEditorSelectedCategories(
            getCategoriesIds(response.data.categories)
          )
        );
      })
      .catch((error) => {
        dispatch(setMessageInfosInState("post"));
        showMessages();
      });
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
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
              updatePost(postToEdit.id)
              // draftToHtml(convertToRaw(editorState.getCurrentContent()))
              // contentState
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
  ) : (
    <Loader />
  );
}

export default TextEditorModif;
