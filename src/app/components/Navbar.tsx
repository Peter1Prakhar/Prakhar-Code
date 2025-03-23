"use client";
import Link from "next/link";
import { useAuth } from "@/firebase/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">
        <Link href="/">Prakhar Code</Link>
      </h1>
      <div>
        {currentUser ? (
          <button onClick={() => { logout(); router.push("/"); }} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          <Link href="/login" className="bg-blue-500 px-4 py-2 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
