import React, { useState } from "react";
import menu from "../assets/images/menu.png";
import logo from "../assets/images/logo.png";
import SocialMedia from "./SocialMedia";

function Nav() {
  const [showNav, setshowNav] = useState(false);
  return (
    <header className="max-w-[1880px] shadow-xl fixed top-[30px] bg-black left-[50%] translate-x-[-50%] m-auto w-[90%] p-6 px-8  rounded-lg max-md:p-3 max-md:px-4 max-sm:px-7 ">
      <nav className="flex justify-between items-center ">
        <div className="nav_btn_holder flex  max-md:flex-2 flex-1 max-md:justify-center">
          <SocialMedia />
        </div>
        <ul className="nav flex items-center justify-between  flex-1 text-white max-lg:flex-[1.5]">
          <li>
            <a className="font-bold" href="#contact">
              اتصل بنا
            </a>
          </li>
          <li>
            <a className="font-bold" href="#catalog">
              حول الاكادمية
            </a>
          </li>
          <li>
            <a className="font-bold" href="#devis">
              مميزاتنا
            </a>
          </li>
          <li>
            <a className="font-bold" href="#hero">
              الرئيسية
            </a>
          </li>
        </ul>
        {showNav ? (
          <button
            className="text-[25px]  text-white"
            onClick={() => setshowNav(false)}
          >
            X
          </button>
        ) : (
          <img
            src={menu}
            alt="menu"
            className="menu cursor-pointer"
            onClick={() => setshowNav(true)}
          />
        )}

        <a className="flex items-start justify-end flex-1 max-md:flex-[0.5] max-sm:flex-[0.33] ">
          <img
            src={logo}
            alt="logo"
            className="h-[50px] w-[80px] max-sm:h-[40px] max-sm:w-[70px] object-contain  cursor-pointer "
          />
        </a>
      </nav>
      {showNav && (
        <ul className="navMobile h-[fit-content] rounded-xl w-[50%] shadow-xl  left-0 top-[102%] z-10 fixed bg-black p-5 ">
          <li className="my-5 text-right">
            <a className="font-bold text-white" href="#contact">
              اتصل بنا
            </a>
          </li>
          <li className="my-5 text-right">
            <a className="font-bold text-white" href="#catalog">
              حول الاكادمية
            </a>
          </li>
          <li className="my-5 text-right">
            <a className="font-bold text-white" href="#devis">
              مميزاتنا
            </a>
          </li>
          <li className="my-5 text-right">
            <a className="font-bold text-white" href="#hero">
              الرئيسية
            </a>
          </li>
          <div className=" flex justify-center items-center  max-md:justify-center pt-4">
            <SocialMedia />
          </div>
        </ul>
      )}
    </header>
  );
}

export default Nav;
