"use client";

import { useState } from "react";
import { updateBlock } from "@/api";
import Link from "next/link";

type Props = {
    block: {
        id: number
        title: string
        code: string
    }
}

export default function EditBlockForm({ block }: Props) {
  const [newTitle, setNewTitle] = useState(block.title);
  const [newCode, setNewCode] = useState(block.code);

  return (
    <form action={updateBlock} className="space-y-4">
      <input type="hidden" name="id" value={block.id} />

      <input
        name="title"
        className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <textarea
        name="code"
        className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newCode}
        onChange={(e) => setNewCode(e.target.value)}
      />
      <Link 
        href={`/blocks/${block.id}`} 
        className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
        >Cancel
      </Link>
      <button type="submit" className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">
        Save
      </button>
    </form>
  );
}