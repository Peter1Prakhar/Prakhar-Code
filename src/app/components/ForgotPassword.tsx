"use client"
import React, {useState} from 'react'
import { useCloseModel } from "../components/AuthModel";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
      auth
    );
    const handleClick2 = useCloseModel();
    const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const success = await sendPasswordResetEmail(email);
              if (success) {
                alert('Sent email');
              }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <button className=" top-0 relative right-0 ml-0" onClick={handleClick2}>X</button>
                <div className="flex justify-center">
                    <img src="/favicon.png" alt="logo-" className="h-12 w-25 " />
                </div>
                <h3 className="text-center text-2xl font-bold">Leetcode</h3>
                <form onSubmit={handleEmail}>
                    <div className="mb-4">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name='email'
                        type="email"
                        placeholder="Email or username"
                        style={{ opacity: 0.5 }}
                    />
                    </div>
                    <div className="flex justify-center items-center w-50">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                            type="button"
                        >
                            Forgot Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}
