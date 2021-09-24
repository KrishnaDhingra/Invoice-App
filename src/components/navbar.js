import React from 'react'
import { HiSun, HiMoon } from "react-icons/hi";


export let Navbar = () => {
    return (
        <div className="absolute flex flex-col justify-between items-center left-0 top-0 rounded-r-3xl h-screen w-28 bg-skin-navbarBg">

            <div className="flex justify-center items-center h-28 w-full rounded-r-3xl bg-skin-logoBg">
                <div className="bg-white h-10 w-10 rounded-full"></div>
            </div>

            <div className="py-8 w-full flex flex-col items-center justify-center gap-8">
                <HiSun className="text-2xl text-gray-500"/>

                <div className="w-full border-t border-gray-600 bg-gray-400"></div>

                <div className="h-10 w-10 bg-yellow-300 rounded-full"></div>
            </div>
        </div>
    )
}