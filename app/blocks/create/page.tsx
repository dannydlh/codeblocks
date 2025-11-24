import Link from "next/link";
import { createBlock } from "@/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateBlock() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;
    if (!userId) {
      redirect("/login");
    }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Create Block</h1>
          <Link href="/" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Go back Home</Link>
        </header>
        <div>
          <form action={createBlock}>
              <input type="hidden" name="userId" value={userId} />
              <input type="text" name="title" placeholder="Block Title" className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <textarea name="code" placeholder="your code goes here..." className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition">Create</button>
          </form>
        </div>
      </div>
    </main>
  );
}
