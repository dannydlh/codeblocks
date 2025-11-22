import { prisma } from "@/database";
import EditBlockForm from "./EditBlockForm";

type Props = {
  params: {
    id: Promise<{ id: string }>;
  }
}


export default async function EditBlock( { params }: Props) {

  const { id } = await params;
  const block = await prisma.block.findUnique({
    where: { id: Number(id) },
  });

  return ( 
      <>
      <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Edit Block</h1>
        </header>
        <EditBlockForm block={block!} />
      </div>
    </main>
  </>);
}
