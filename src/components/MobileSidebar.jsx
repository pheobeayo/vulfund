import  { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { LuCircleDollarSign } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { TbSettings } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);


  

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
            <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
      {isOpen && (
        <div className="bg-[#123962] text-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
          
          <NavLink
            to="/dashboard"
            className="text-[14px] text-white flex items-center py-4 my-4 px-4 hover:text-[#00AEE6]"
            
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="projects"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
           
          >
            < GoProjectSymlink className="mr-4" /> Projects
          </NavLink>
          <NavLink
            to="donate"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            
          >
            < LuCircleDollarSign className="mr-4" />
            Donate
          </NavLink>
          <NavLink
            to="request_fund"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            
          >
            <GiReceiveMoney  className="mr-4" /> Request Fund
          </NavLink>
          <NavLink
            to="dao"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
           
          >
            < CgCommunity className="mr-4" /> Dao
          </NavLink>
          <button className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]">
            <TbSettings className="mr-4" /> Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
