"use client";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModelAtom";
import { useCloseModel } from "../components/AuthModel";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from 'next/navigation';

export const Login = () => {
    const setAuthModelState = useSetRecoilState(authModalState);
    const handleClick = (type:"forgotPassword" | "register" | "login") => {
        setAuthModelState((prev) => ({
            ...prev,
            type
        }))
    }
    const [input, setInput] = useState({email: "", password: ""})
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useRouter();
    const handleClick2 = useCloseModel();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("hello");
        try {
            const user = await signInWithEmailAndPassword(input.email, input.password);
            if(!user) return;
            console.log(user);
            navigate.push("/problems");
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
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                    <input
                        value={input.email}
                        onChange={(e) => setInput({...input, email:e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="email"
                        placeholder="Email"
                        style={{ opacity: 0.5 }}
                    />
                    </div>
                    <div className="mb-6">
                    <input
                        value = {input.password}
                        onChange={(e) => setInput({...input, password:e.target.value})}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        style={{ opacity: 0.5 }}
                    />
                    </div>
                    <div className="flex justify-center items-center w-50">
                        <button
                            onClick={() => signInWithEmailAndPassword(input.email, input.password)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            type="button" onClick={() => handleClick("forgotPassword")}
                        >
                            Forgot Password?{" "}
                        </button>
                        <button
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            type="button" onClick={() => handleClick("register")}
                        >
                            {"  "}Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
