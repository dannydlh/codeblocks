"use client"
import { useState } from "react";
import Editor from '@monaco-editor/react';

type Props = {
  code: string;
}

export function CodeEditor( {code}: Props ) {

  function handleEditorChange(value:any, event:any) {
    console.log('here is the current model value:', value);
  }

  return (
    <Editor
      height="20vh"
      width="70vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
    />
  );
}