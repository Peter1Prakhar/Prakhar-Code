"use client";  
import React, {useState} from 'react'
import { useCloseModel } from "../components/AuthModel";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from "../firebase/firebase";
import { useRouter } from 'next/navigation';


export const Signup=()=> {
    const handleClick2 = useCloseModel();
    const [input, setInput] = useState({email: "", password: ""})
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useRouter(); 
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            alert("Please enter both email and password");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(input.email, input.password);
            if (!newUser) return;
            navigate.push("/problems");
        } catch (error: any) {
            console.error("Firebase Error:", error);
            alert(error.message); 
        }
    };

  return (
    <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <button className=" top-0 relative right-0 ml-0" onClick={handleClick2}>X</button>
                <div className="flex justify-center">
                    <img src="/favicon.png" alt="logo-" className="h-12 w-25 " />
                </div>
                <h3 className="text-center text-2xl font-bold">Leetcode</h3>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                    <input onChange={(e)=> setInput({...input, email: e.target.value})}
                        value = {input.email}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Email or username"
                        style={{ opacity: 0.5 }}
                    />
                    </div>
                    <div className="mb-6">
                    <input onChange={(e)=> setInput({...input, password: e.target.value})}
                        value = {input.password}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text"
                        placeholder="Password"
                        style={{ opacity: 0.5 }}
                    />
                    </div>
                    <div className="flex justify-center items-center w-50">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                            type="submit"
                        >
                            {loading ? "Registering...": "Register"}
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
  )
}
