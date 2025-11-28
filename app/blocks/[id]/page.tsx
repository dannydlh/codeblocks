import Link from "next/link";
import { prisma } from "@/database";
import { notFound, redirect } from 'next/navigation';
import { deleteBlock } from "@/api";
import { cookies } from "next/headers";
import { CodeEditor } from "@/components/ui/CodeEditor";
import ConfirmDeleteButton from "@/components/ui/ConfirmDeleteButton";

type Props = {
  params: {
    id: Promise<{ id: string }>;
  }
}

export default async function ViewBlock( { params }: Props ) {

  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }

  const { id } = await params;

  const block = await prisma.block.findUnique({
    where: { id: Number(id) },
  });

  if (!block) return notFound();
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">{block.title}</h1>
            <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Go back Home</Link>
        </header>
          <div>
            <form action={deleteBlock}>
              <input type="hidden" name="id" value={block.id} />
                <CodeEditor code={block.code} readOnly={true} />
              <div className="flex justify-evenly py-3">
{/*                 <button 
                  type="submit"
                  className="cursor-pointer inline-block px-10 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
                    Delete
                </button> */}
                <ConfirmDeleteButton />
                <a href={`/blocks/${id}/edit`} className="inline-block px-10 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Edit</a>
              </div>
            </form>
          </div>
        </div>
        
      </main>
  );
}
