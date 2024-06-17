import React, {useEffect, useState} from 'react'
import { useSetRecoilState } from 'recoil'  
import { authModalState } from '@/atoms/authModelAtom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import { useSignOut } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Timer from './Timer'


function Navbar({problemPage}: { problemPage: boolean }) {
    const Navigate = useRouter();
    const setAuthModelState = useSetRecoilState(authModalState);
    const handleclick = () => {
        console.log("hello");
        setAuthModelState((prev) => ({
            ...prev,
            isOpen: true
        }))
    }
    const [user, loading, error] = useAuthState(auth); // this is for the authenticating the user is logged in or not
    const [showTooltip, setShowTooltip] = useState(false); // this is for the hover state for the proifle button
    const [signOut] = useSignOut(auth);
    if (user)
        return (
            <nav className="flex justify-between items-center h-16 text-white relative shadow-sm font-not-italic bg-black h-100vh w-100vw  bg-cover" role="navigation">
            <a href="/" className="pl-20">
                <img src="/logo-full.png" alt="logo-" className="h-12 w-25" />
            </a>
            {problemPage &&
                <div className='flex'>
                <button className="bg-black-300 hover:bg-black-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button className="bg-black-300 hover:bg-black-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >
                    Run
                </button>
                <button className="bg-black-300 hover:bg-black-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>    
                </button>
                <Timer/>
                </div>
            }
            <div className="md:block hidden">
                <button
                className="p-4 text-orange-400"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                >
                Profile
                </button>
                {showTooltip && (
                <div className="absolute top-0 text-orange-300 right-5 bg-black-300">
                    <p className='text-sm'> {user.email}</p> 
                </div>
                )}
                <button className="p-4 pr-20 text-white" 
                onClick={ () => {
                    signOut();
                    Navigate.push("/home");
                }}
                >
                Logout
                </button>
            </div>
            </nav>
        )
    
return (
    <div className='pt-5'>
        <nav className="flex justify-between items-center h-16 text-white relative shadow-sm font-not-italic" role="navigation">
            <a href="/" className="pl-20">
                <img src="/logo-full.png" alt="logo-" className="h-12 w-25" />
            </a>
            <div className="  md:block hidden">
                <a href="/" className="p-4 text-orange-400">Premium</a>
                <a href="/" className="p-4 text-white">About</a>
                <a href="/" className="p-4 text-white">Services</a>
                <button className="p-4 pr-20 text-white" 
                onClick={handleclick}
                >Signin</button>
            </div>
        </nav>
    </div>
)
}

export default Navbar
