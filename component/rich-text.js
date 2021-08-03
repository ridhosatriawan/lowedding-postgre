import React, { Component } from "react";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then(({ Editor }) => Editor),
  {
    ssr: false,
  }
);

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default class RichText extends Component {
state ={
    editorState :EditorState.createEmpty(),
}

onEditorStateChange = (editorState) =>{
    this.setState({
        editorState,
    });
}

  render() {
    const {editorState} = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}
