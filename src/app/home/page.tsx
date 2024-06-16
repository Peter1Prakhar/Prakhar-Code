"use client";
import { AuthModel } from "@/components/AuthModel";
import Navbar from "@/components/Codeeditor/Navbar";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModelAtom"; // Add missing import
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";


export default function Home() {
  const authModal = useRecoilValue(authModalState); // Add missing variable declaration
  const [user, loading, error] = useAuthState(auth);
  const navigate = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  useEffect(() => {
    if (user) navigate.push("/");
    if(!loading && !user) setPageLoading(false);
  }, [user, navigate, loading])
  if(pageLoading) return null;
  return (
    <div className="bg-[url('/bg.png')] h-screen bg-cover bg-center">
      <Navbar problemPage= {false} />
      {authModal.isOpen && <AuthModel />} 
    </div>
  );
}
