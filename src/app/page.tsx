"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "./firebase/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (currentUser) {
    router.push("/problems"); // Redirect to problems if already logged in
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Welcome to Prakhar Code</h1>
      <p className="text-lg text-gray-600 mt-2">Solve coding problems and enhance your skills</p>
      <button
        onClick={() => router.push("/login")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg"
      >
        Login to Get Started
      </button>
    </main>
  );
}
