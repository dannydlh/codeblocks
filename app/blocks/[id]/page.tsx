import Link from "next/link";
import { prisma } from "@/database";
import { notFound } from 'next/navigation';
import { deleteBlock } from "@/api";

type Props = {
  params: {
    id: Promise<{ id: string }>;
  }
}

export default async function ViewBlock( { params }: Props ) {

  const { id } = await params;

  const block = await prisma.block.findUnique({
    where: { id: Number(id) },
  });

  if (!block) return notFound();
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{block.title}</h1>
            <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Go back Home</Link>
        </header>
          <div>
            <form action={deleteBlock}>
              <input type="hidden" name="id" value={block.id} />
              <textarea placeholder="Block of code" className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly value={block.code}>
              </textarea>
              <button 
                type="submit"
                className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
                  Delete
            </button>
            </form>
            <Link href={`/blocks/${id}/edit`} className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Edit</Link>
          </div>
        </div>
      </main>
  );
}
