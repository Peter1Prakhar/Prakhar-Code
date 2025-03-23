"use client";
import { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, signup, currentUser } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  if (currentUser) {
    router.push("/problems"); // Redirect if already logged in
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      router.push("/problems");
    } catch (err) {
      setError("Failed to authenticate. Please check your credentials.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 rounded">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>
        <p className="mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 cursor-pointer">
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
