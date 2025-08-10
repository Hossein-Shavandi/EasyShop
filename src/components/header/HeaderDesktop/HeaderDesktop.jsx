import { useState } from "react";
import Search from "./HeaderSearch";
import Logo from "./HeaderLogo";
import Register from "./Headerlogin";
import HeaderBasket from "./HeaderBasket";
import Alerts from "./Headeralert";

const Header = () =>{
    return(
        <>
            <header className="absolute top-2 right-0 left-0 hidden lg:flex items-center mx-auto w-[100%] h-14 rounded-lg px-10 py-5">
                <div className="flex items-center justify-between w-full">
                    <nav className="flex items-center gap-x-9 h-14">
                        <Logo />
                        <Search />
                    </nav>


                    <div className="flex items-center gap-x-5 lg:gap-x-3 text-icons dark:text-white">
                        <div className="flex items-center gap-x-4 lg:gap-x-4">
                            <Alerts />

                            <Register />
                            
                        </div>

                        <span className="block w-px h-7 bg-line-span"></span>

                        <HeaderBasket />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header