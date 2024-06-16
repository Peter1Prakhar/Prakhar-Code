"use client";
import Navbar  from "@/components/Codeeditor/Navbar";
import { Login } from "@/components/Login";
import { problems } from "@/mockProblems/problems";
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
      <div className="bg-black h-100vh w-100vw  bg-cover ">
        <Navbar problemPage = {false} />
        <div className="flex flex-wrap justify-center mt-10">
          {problems.map(({ id, title, difficulty, category, order, videoId:videoId }) => (
            <div key={id} className="bg-white rounded-lg p-4 m-2">
              <div className="text-center">{order}</div>
              <div className="flex flex-wrap justify-center">
              <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 7 12 12 7 17" />  <polyline points="13 7 18 12 13 17" /></svg>
                <button onClick={() => handleProblemPage(id)} className="">{title}</button>
              </div>
              <div className="text-center">
                <div className="inline-block  bg-green-500 "> {difficulty}</div>
              </div>
              <div className="text-center">{category}</div>
              <div className="text-center">
                  <button onClick={() => setVideoId(videoId || null)}>
                  {videoId && 
                    <img src="youtube.png" style={{ width: '40px', height: '30px' }} />
                  }
                  {!videoId && 'NO video'}
                  </button>
              </div>
            </div>
          ))}
        </div>
        {videoId && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75">
          <YouTube videoId={videoId} />
          <button onClick={handleVideoClose} style={{ color: 'white', position: 'absolute', top: '10px', right: '10px' }}>X</button>
        </div>
      )}
      </div>
    </>
  );
}
