import React, {useEffect} from 'react'
import { useRecoilState } from "recoil"
import { ForgotPassword } from "./ForgotPassword"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { authModalState } from "../atoms/authModelAtom"
import { useSetRecoilState } from "recoil";

export const AuthModel = () => {
    const [authModal] = useRecoilState(authModalState) // Update this line
    const handleClick2 = useCloseModel();
    return(
        <div>
            {authModal.type === "login" ? <Login /> : authModal.type === "register" ? <Signup /> : <ForgotPassword />}
        </div>
    )
}
export function useCloseModel(){
    const setAuthModelState = useSetRecoilState(authModalState);
    const closeModel = () => {
        setAuthModelState((prev) => ({
            ...prev,
            isOpen: false,
            type: "login"
        }))
    }

    useEffect (() => {
        const handleEsc = (e: KeyboardEvent) => {
            if(e.key === "Escape"){
                closeModel()
            }
        }
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc)
        }
    } , [])
    return closeModel;
}