import React from 'react'
import { HiSun, HiMoon } from "react-icons/hi";


export let Navbar = (props) => {
    return (
        <div onClick={(event) => event.stopPropagation()}className="z-10 absolute flex lg:flex-col justify-between items-center lg:left-0 top-0 lg:rounded-r-3xl h-20 lg:h-screen w-full lg:w-28 bg-skin-navbarBg">

            <div className="flex justify-center items-center h-full w-20 lg:h-28 lg:w-full rounded-r-3xl bg-skin-logoBg">
                <div className="bg-white h-8 w-8 lg:h-10 lg:w-10 rounded-full"></div>
            </div>

            <div className="py-8 lg:w-full flex lg:flex-col items-center justify-center gap-8 pr-8 lg:pr-0">
                
                {props.theme === 'dark' ? <HiSun 
                    onClick={
                        props.ChangeTheme()
                    } 
                    className="text-2xl text-gray-500"
                /> : <HiMoon
                onClick={props.ChangeTheme()} 
                className="text-2xl text-gray-500"
            />
                }

                <div className="h-20 lg:h-0 lg:w-full border-r lg:border-t border-gray-800 bg-gray-400"></div>

                <div className="h-8 w-8 lg:h-10 lg:w-10 bg-yellow-300 rounded-full"></div>
            </div>
        </div>
    )
}