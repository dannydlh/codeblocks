import Link from "next/link";

export default function EditBlock() {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Block Title" />
        </div>
        <textarea placeholder="your code goes here..."></textarea>
      </form>
      <Link href="/blocks">Save</Link>
    </div>
  );
}
