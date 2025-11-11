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
    <div>
      <Link href="/">Go back Home</Link>
      <Link href="/">Delete</Link>
      <Link href={`/blocks/${id}/edit`}>Edit</Link>
      <form>
        <div>
          <h1>{block.title}</h1>
        </div>
        <textarea placeholder="block of code">{block.code}</textarea>
        
      </form>
    </div>
  );
}
