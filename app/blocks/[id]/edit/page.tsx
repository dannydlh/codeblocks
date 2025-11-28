import { prisma } from "@/database";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import EditBlockForm from "@/components/ui/EditBlockForm";

type Props = {
  params: {
    id: Promise<{ id: string }>;
  }
}


export default async function EditBlock( { params }: Props) {

  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }

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
