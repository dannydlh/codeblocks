"use client"
import Editor from '@monaco-editor/react';

type Props = {
  code: string;
  handleEditorValue?: (value: string | undefined) => void;
  readOnly?: boolean;
}

export function CodeEditor( {code, handleEditorValue, readOnly = false}: Props ) {

  function handleEditorChange(value: string | undefined, event: any) {
    handleEditorValue?.(value);
  }

  return (
    <Editor
      height="20vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{readOnly}}
    />
  );
}