"use client";

import { useState } from "react";
import { updateBlock, createBlock } from "@/api";
import Link from "next/link";
import { CodeEditor } from "./CodeEditor";
import { useRouter } from "next/navigation";


type Props = {
    block?: {
        id: number
        title: string
        code: string
    }
    userId?: string;
}

export default function EditBlockForm({ block, userId }: Props) {
  
  const newUser = userId;
  const [newTitle, setNewTitle] = useState(block?.title || "");
  const [editorCode, setEditorCode] = useState(block?.code || "");

  const router = useRouter();

  const handleEditorValue = (value: string | undefined) => {
    if (value) {
      setEditorCode(value);
    }
  }

  return (
    <form action={block?.id ? updateBlock : createBlock} className="space-y-4">
      <input type="hidden" name="id" value={block?.id || ""} />
      <input type="hidden" name="userId" value={newUser} />
      <p>Title:</p>
      <input
        name="title"
        className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <p>Code:</p>
      <input type="hidden" name="code" value={editorCode} />
      <CodeEditor code={block?.code || ""} handleEditorValue={handleEditorValue}/>
      <div className="flex justify-evenly">
        <button
          type="button"
          className="cursor-pointer px-10 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          onClick={() => router.back()}
          >Cancel
        </button>
        <button 
          type="submit" 
          className="cursor-pointer px-10 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          disabled={!newTitle || !editorCode}
          >Save
        </button>
      </div>
    </form>
  );
}