"use client";

import { handleLogOut } from "@/api";

export default function LogoutButton() {

  return (
    <form action={handleLogOut}>
        <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
        Log Out
        </button>
    </form>
  );
}