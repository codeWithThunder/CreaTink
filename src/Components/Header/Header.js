import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <header className="text-gray-600 body-font ">
      
      <div className="container mx-auto flex flex-wrap p-[1rem] flex-col md:flex-row items-center">
        <Link to="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer text-white">
              Crea<span className="text-[#ff0099ed]">Tink</span>
            </span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" id="contentHoverEffect1">
            HOME <span id="navBottomContent1"></span>
          </Link>
          <Link to="/services" id="contentHoverEffect2">
            SERVICES <span id="navBottomContent2"></span>
          </Link>
          <Link to="/price" id="contentHoverEffect4">
            PRICE <span id="navBottomContent4"></span>
          </Link>
          <Link to="/portfolio" id="contentHoverEffect5">
            PORTFOLIO <span id="navBottomContent5"></span>
          </Link>
          <Link to="/about" id="contentHoverEffect6">
            ABOUT <span id="navBottomContent6"></span>
          </Link>
        </nav>

        <Link to="/login" id="contentHoverEffect5">
          Sign Up
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
