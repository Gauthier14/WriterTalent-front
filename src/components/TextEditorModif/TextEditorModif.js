/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable comma-dangle */
// import { useState } from "react";
import { useLocation, useParams } from 'react-router';
import { useEffect, useState } from 'react';
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
import { getCategoriesIds, toolbarParams } from '../../selectors/editor';
import NewLoader from '../NewLoader/NewLoader';
import { setMessageInfosInState } from '../../actions/messages';
import { showMessages, generateMessages } from '../../selectors/message';
import { manageSessionStorage } from '../../selectors/user';

function TextEditorModif() {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.editor.loaded);
  const editorState = useSelector((state) => state.editor.editorState);
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
        dispatch(setMessageInfosInState(generateMessages('post')));
        showMessages();
      });
  }, []);

  const onEditorStateChange = (editorState) => {
    dispatch(updateEditor(editorState));
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
              updatePost(id),
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
            dispatch(askForPublication(id));
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
