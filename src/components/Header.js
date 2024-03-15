import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { behance_logo } from "../Data";
import { adobe_cloude } from "../Data";
import { adobeLogo } from "../Data";
import { searchType } from "../Data";
import { tagName } from "../Data";
import Searched from "./Searched";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Recommended", "Curated", "Most Appreciated", "Most Viewed"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <header className="header" id="header">
        <div className="border-b fixed w-full top-0 bg-white z-10">
          <div className="container-fluid">
            <div className="top-header py-4 lgpy-3 px-5 border-b border ">
              <div className="navbar flex items-center justify-between">
                <div className="brand-logo flex items-center">
                  <img
                    src={behance_logo}
                    alt={behance_logo}
                    className="w-auto h-4"
                  />
                  <div className="page-links  lg:ml-8 hidden lg:block">
                    <ul className="flex items-center">
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Fou you
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Discover
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Livestreams
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Hire
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="aciton-area flex items-center">
                    <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                      <a href="" className="text-[#0057ff] font-medium text-md">
                        Login
                      </a>
                    </div>
                    <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                      <a href="" className="text-white font-medium text-md">
                        Sign Up
                      </a>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="free-btn mx-4 flex items-center border rounded-full px-4 py-1">
                      <div className="cloud-icon pr-2">
                        <img
                          src={adobe_cloude}
                          alt={adobe_cloude}
                          className="w-5 h-5"
                        />
                      </div>
                      <a href="">Free Trial</a>
                    </div>
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                      <img
                        src={adobeLogo}
                        alt={adobeLogo}
                        className="w-5 h-5"
                      />
                      <a href="" className="pl-1 font-bold text-black text-sm">
                        {" "}
                        Adobe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Searched />
            <div className="search-area p-5">
              <div className="search-area flex items-center">
                <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                  <div className="tags-search bg-white px-4 py-3 border-l-2 ">
                    <ul className="flex items-center">
                      <li className=" text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm">
                        <a href="">Projects</a>
                      </li>
                      <div className="dt-arrow block lg:hidden">
                        <MdArrowDropDown />
                      </div>
                      {searchType.map((tags) => (
                        <li className="mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]">
                          <a href="">{tags.sItems}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              {tagName.map((tools) => (
                <div className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                  <div className="t-icon">{tools.tagsIcon}</div>
                  <div className="tname px-2">
                    <p className="text-sm font-bold"> {tools.tags}</p>
                  </div>
                  <div className="dt-arrow">
                    <MdArrowDropDown />
                  </div>
                </div>
              ))}

              <div className="recm-item">
                <span className="text-xs font-bold text-[#626161]">Sort</span>
                <div className="flex items-center relative">
                  <p
                    className="text-sm font-medium pr-1 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selectedOption}
                  </p>
                  <MdArrowDropDown
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  {isOpen && (
                    <div className="absolute top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      {options.map((option) => (
                        <p
                          key={option}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
