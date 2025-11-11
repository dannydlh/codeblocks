import Link from "next/link";
import { prisma } from "@/database";

type Props = {
  params: {
    id: Promise<{ id: string }>;
  }
}

export default async function ViewBlock({ params }: Props ) {

  const { id: idStr } = await params;
  const id = Number(idStr);

  const block = await prisma.block.findUnique({
    where: { id },
  });

  if (!block) {
    return <p className="text-gray-500 text-center">Block not found.</p>;
  }
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{block.title}</h1>
            <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Go back Home</Link>
        </header>
          <div>
            <form>
              <textarea placeholder="Block of code" className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500">{block.code}</textarea>
            </form>
            <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition">Delete</Link>
            <Link href={`/blocks/${id}/edit`} className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Edit</Link>
          </div>
        </div>
      </main>
  );
}
