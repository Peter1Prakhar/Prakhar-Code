"use client";
import { Login } from "@/components/Login";
import YouTube from 'react-youtube';
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { useRouter } from 'next/navigation';

export default function HomePage(){
  const Navigate = useRouter();
  const [videoId, setVideoId] = useState<string | null>(null);
  const handleVideoClose = () => {
    setVideoId(null);
  };
  const handleProblemPage = (id: string) => {
    Navigate.push(`/product/${id}`);
  }
  const [user, loading, error] = useAuthState(auth); // this is for the authenticating the user is logged in or not
  if(!user) 
    Navigate.push("/home");
  return (
    <>
      {user && Navigate.push("/problems")}
    </>
  );
}
